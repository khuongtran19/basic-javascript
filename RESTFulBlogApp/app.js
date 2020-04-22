const express = require("express"),
    methodOverride = require("method-override"),
    expressSanitizer = require("express-sanitizer"),
    app = express(),
    bodyParser = require("body-parser"),
    port = 3000,
    mongoose = require("mongoose");

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost/restful_blog_app", { useFindAndModify: false });
app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(expressSanitizer())

const blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {
        type: Date,
        default: Date.now
    }
});

const Blog = mongoose.model("Blog", blogSchema)

app.get("/", (req, res) => {
    res.redirect("/blogs")
});

// Index Route
app.get("/blogs", (req, res) => {
    Blog.find({}, (err, blogs) => {
        if (err) {
            console.log(err)
        } else {
            res.render("index", { blogs: blogs })
        }
    })
})

// New Route
app.get("/blogs/new", (req, res) => {
    res.render("new")
})

// Create Route
app.post("/blogs", (req, res) => {
    // create blog

    Blog.create(req.body.blog, (err, newBlog) => {
        if (err) {
            res.render("new")
        } else {
            // then, redirect to the index
            res.redirect("/blogs")
        }
    })
})

// Show Route
app.get("/blogs/:id", (req, res) => {
    Blog.findById(req.params.id, (err, foundBlog) => {
        if (err) {
            res.redirect("/blogs")
        } else {
            res.render("show", { blog: foundBlog })
        }
    })
})

// Edit Route 
app.get("/blogs/:id/edit", (req, res) => {
    Blog.findById(req.params.id, (err, foundBlog) => {
        if (err) {
            res.redirect("/blogs");
        } else {
            res.render("edit", { blog: foundBlog })
        }
    })
})

// Update Route
app.put("/blogs/:id", (req, res) => {
    req.body.blog.body = req.sanitize(req.body.blog.body)
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, (err, updateBlog) => {
        if (err) {
            res.redirect("/blogs");
        } else {
            res.redirect("/blogs/" + req.params.id)
        }
    })
})

// Delete Route
app.delete("/blogs/:id", (req, res) => {
    Blog.findByIdAndRemove(req.params.id, (err) => {
        if (err) {
            res.redirect("/blogs")
        } else {
            res.redirect("/blogs")
        }
    })
})

// Listen to asign port
app.listen(port, () => {
    console.log(`Server running at Port ${port}`)
})

