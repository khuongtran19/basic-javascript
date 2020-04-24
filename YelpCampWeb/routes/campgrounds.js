const express = require("express"),
    router = express.Router(),
    Campground = require("../models/campground"),
    middleware = require("../middleware")

// Index
router.get("/", (req, res) => {
    // Get all campgrounds from DB
    Campground.find({}, (err, allCampgrounds) => {
        if (err) {
            console.log(err)
        } else {
            res.render("campgrounds/index", { campgrounds: allCampgrounds })
        }
    })
})

router.get("/news", middleware.isLoggedIn, (req, res) => {
    res.render("campgrounds/news")
})


// Create new campground
router.post("/", middleware.isLoggedIn, (req, res) => {
    const name = req.body.name,
        image = req.body.image,
        price = req.body.price,
        description = req.body.description,
        author = {
            id: req.user._id,
            username: req.user.username
        }
    const newCampgrounds = { name: name, image: image, description: description, author: author, price: price }
    // Create a new campground and save to DB
    Campground.create(newCampgrounds, (err, newCreateCamp) => {
        if (err) {
            console.log(err)
        } else {
            // redirect back to campgrounds page
            console.log(newCreateCamp)
            res.redirect("/campgrounds")
        }
    })
})

// Show campground by ID
router.get("/:id", middleware.isLoggedIn, (req, res) => {
    Campground.findById(req.params.id).populate("comments").exec((err, foundCampground) => {
        if (err) {
            console.log(err)
        } else {
            console.log(foundCampground)
            res.render("campgrounds/show", { campground: foundCampground })
        }
    })
})

// Edit campground route
router.get("/:id/edit", middleware.checkCampgroundOwnership, function (req, res) {
    Campground.findById(req.params.id, function (err, foundCampground) {
        res.render("campgrounds/edit", { campground: foundCampground });
    });
});

// Update campground route
router.put("/:id", middleware.checkCampgroundOwnership, (req, res) => {
    // find and update the correct campground
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, (err, updatedCampground) => {
        if (err) {
            res.redirect("/campgrounds")
        } else {
            res.redirect("/campgrounds/" + req.params.id)
        }
    })
})

// Delete campground route
router.delete("/:id", middleware.checkCampgroundOwnership, (req, res) => {
    Campground.findByIdAndRemove(req.params.id, (err) => {
        if (err) {
            res.redirect("/campgrounds")
        } else {
            res.redirect("/campgrounds")
        }
    })
})

module.exports = router