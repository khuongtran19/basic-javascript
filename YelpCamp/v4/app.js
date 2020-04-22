const express = require("express"),
    app = express(),
    dotenv = require("dotenv"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    port = parseInt(process.env.APP_PORT || 3000),
    Campground = require("./models/campground"),
    // Comment = require("./models/comment"),
    // User = require("./models/user"),
    seedDB = require("./seeds")

seedDB();
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost/yelp_camp", { useFindAndModify: false });

app.use(bodyParser.urlencoded({ extended: true }))
dotenv.config();
app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    res.render("landing")
})

app.get("/campgrounds", (req, res) => {
    // Get all campgrounds from DB
    Campground.find({}, (err, allCampgrounds) => {
        if (err) {
            console.log(err)
        } else {
            res.render("index.ejs", { campgrounds: allCampgrounds })
        }
    })
})

app.get("/campgrounds/news", (req, res) => {
    res.render("news.ejs")
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
            res.render("show", { campground: foundCampground })
        }
    })
})

app.listen(port, () => {
    console.log(`Server running at Port ${port}`)
})