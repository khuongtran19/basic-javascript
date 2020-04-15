const express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    port = 3000
mongoose = require("mongoose");

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost/restful_blog_app", { useFindAndModify: false });
app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }));

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

app.get("/blogs", (req, res) => {
    res.render("index")
})

app.listen(port, () => {
    console.log(`Server running at Port ${port}`)
})
