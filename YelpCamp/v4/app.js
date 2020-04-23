const express = require("express"),
    app = express(),
    dotenv = require("dotenv"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    port = parseInt(process.env.APP_PORT || 3000),
    Campground = require("./models/campground"),
    Comment = require("./models/comment"),
    // User = require("./models/user"),
    seedDB = require("./seeds")

seedDB();
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost/yelp_camp", { useFindAndModify: false });

app.use(bodyParser.urlencoded({ extended: true }))
dotenv.config();
app.set('view engine', 'ejs')
app.use(express.static(__dirname + "/public"))

app.get("/", (req, res) => {
    res.render("landing")
})

app.get("/campgrounds", (req, res) => {
    // Get all campgrounds from DB
    Campground.find({}, (err, allCampgrounds) => {
        if (err) {
            console.log(err)
        } else {
            res.render("campgrounds/index", { campgrounds: allCampgrounds })
        }
    })
})

app.get("/campgrounds/news", (req, res) => {
    res.render("campgrounds/news")
})

app.post("/campgrounds", (req, res) => {
    const name = req.body.name,
        image = req.body.image,
        description = req.body.description;
    const newCampgrounds = { name: name, image: image, description: description }
    // Create a new campground and save to DB
    Campground.create(newCampgrounds, (err, newCreateCamp) => {
        if (err) {
            console.log(err)
        } else {
            // redirect back to campgrounds page
            res.redirect("/campgrounds")
        }
    })
})

// Show campground by ID
app.get("/campgrounds/:id", (req, res) => {
    Campground.findById(req.params.id).populate("comments").exec((err, foundCampground) => {
        if (err) {
            console.log(err)
        } else {
            console.log(foundCampground)
            res.render("campgrounds/show", { campground: foundCampground })
        }
    })
})

// ====================
// Comments routes
// ====================

app.get("/campgrounds/:id/comments/new", (req, res) => {
    // find campground by id
    Campground.findById(req.params.id, (err, campground) => {
        if (err) {
            console.log(err)
        } else {
            res.render("comments/new", { campground: campground })
        }
    })
})

app.post("/campgrounds/:id/comments", (req, res) => {
    // lookup campground using ID
    Campground.findById(req.params.id, (err, campground) => {
        if (err) {
            console.log(err)
            res.redirect("/campgrounds");
        } else {
            Comment.create(req.body.comment, (err, comment) => {
                if (err) {
                    console.log(err)
                } else {
                    campground.comments.push(comment)
                    campground.save()
                    res.redirect("/campgrounds/" + campground._id)
                }
            })
        }
    })
    // create new comment
    // connect new comment to campground
    // redirect campground show page
})

app.listen(port, () => {
    console.log(`Server running at Port ${port}`)
})