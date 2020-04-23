const express = require("express"),
    app = express(),
    dotenv = require("dotenv"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    localStrategy = require("passport-local"),
    port = parseInt(process.env.APP_PORT || 3000),
    Campground = require("./models/campground"),
    Comment = require("./models/comment"),
    User = require("./models/user"),
    seedDB = require("./seeds"),
    methodOverride = require("method-override"),
    commentRoutes = require("./routes/comments"),
    campgroundRoutes = require("./routes/campgrounds"),
    authRoutes = require("./routes/index");

// seedDB();
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost/yelp_camp", { useFindAndModify: false });

app.use(bodyParser.urlencoded({ extended: true }))
dotenv.config();
app.set('view engine', 'ejs')
app.use(express.static(__dirname + "/public"))
app.use(methodOverride("_method"))

app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    next();
})

// Passport configuration
app.use(require("express-session")({
    secret: "Once upon the time",
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())
passport.use(new localStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);
app.use(authRoutes);

app.listen(port, () => {
    console.log(`Server running at Port ${port}`)
})