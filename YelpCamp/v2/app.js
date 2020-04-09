const express = require("express"),
    app = express(),
    dotenv = require("dotenv"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    port = parseInt(process.env.APP_PORT || 3000)

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost/yelp_camp", { useFindAndModify: false });

app.use(bodyParser.urlencoded({ extended: true }))
dotenv.config();
app.set('view engine', 'ejs')

// Schema Setup
const campgroundSchema = new mongoose.Schema({
    name: String,
    image: String
})

// Complie into model
const Campground = mongoose.model("Campground", campgroundSchema)

app.get("/", (req, res) => {
    res.render("landing")
})

app.get("/campgrounds", (req, res) => {
    // Get all campgrounds from DB
    Campground.find({}, (err, allCampgrounds) => {
        if (err) {
            console.log(err)
        } else {
            res.render("campgrounds", { campgrounds: allCampgrounds })
        }
    })
})

app.get("/campgrounds/news", (req, res) => {
    res.render("news.ejs")
})

app.post("/campgrounds", (req, res) => {
    const name = req.body.name;
    const image = req.body.image;
    const newCampgrounds = { name: name, image: image }
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

app.listen(port, () => {
    console.log(`Server running at Port ${port}`)
})