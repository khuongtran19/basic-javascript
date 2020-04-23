const express = require("express"),
    router = express.Router(),
    Campground = require("../models/campground")

// Index
router.get("/", (req, res) => {
    // Get all campgrounds from DB
    Campground.find({}, (err, allCampgrounds) => {
        if (err) {
            console.log(err)
        } else {
            res.render("campgrounds/index", { campgrounds: allCampgrounds, currentUser: req.user })
        }
    })
})

router.get("/news", isLoggedIn, (req, res) => {
    res.render("campgrounds/news")
})

router.post("/", isLoggedIn, (req, res) => {
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
router.get("/:id", (req, res) => {
    Campground.findById(req.params.id).populate("comments").exec((err, foundCampground) => {
        if (err) {
            console.log(err)
        } else {
            console.log(foundCampground)
            res.render("campgrounds/show", { campground: foundCampground })
        }
    })
})

// middleware
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login")
}

module.exports = router