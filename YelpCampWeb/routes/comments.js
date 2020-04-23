const express = require("express"),
    router = express.Router({ mergeParams: true }),
    Campground = require("../models/campground"),
    Comment = require("../models/comment")

// ====================
// Comments routes
// ====================

// comments new
router.get("/new", isLoggedIn, (req, res) => {
    // find campground by id
    Campground.findById(req.params.id, (err, campground) => {
        if (err) {
            console.log(err)
        } else {
            res.render("comments/new", { campground: campground })
        }
    })
})

// comment create
router.post("/", (req, res) => {
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
                    // add username and id to comment
                    comment.author.id = req.user._id;
                    comment.author.username = req.user.username;
                    // save comment
                    comment.save();
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

// Comment edit route
router.get("/:comment_id/edit", (req, res) => {
    Comment.findById(req.params.comment_id, (err, foundComment) => {
        if (err) {
            res.redirect("back")
        } else {
            res.render("comments/edit", { campground_id: req.params.id, comment: foundComment })
        }
    })
})

// Comment update route
router.put("/:comment_id", (req, res) => {
    Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, (err, updatedComment) => {
        if (err) {
            res.redirect("back")
        } else {
            res.redirect("/campgrounds/" + req.params.id)
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