const express = require("express"),
    port = parseInt(process.env.APP_PORT || 3000),
    mongoose = require("mongoose"),
    passport = require("passport"),
    bodyParser = require("body-parser"),
    User = require("./models/user"),
    LocalStrategy = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose"),
    app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(require("express-session")({
    secret: "Noah-LAD",
    resave: false,
    saveUninitialized: false
}))
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost/yelp_camp", { useFindAndModify: false });
app.set('view engine', 'ejs');

// require whenever use passport
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ===================================

// ROUTES

// ===================================
app.get("/", (req, res) => {
    res.render("home")
})

app.get("/secret", isLoggedIn, (req, res) => {
    res.render("secret")
})

// Auth Routes

// show sign up form 
app.get("/register", (req, res) => {
    res.render("register")
})
// handling user sign up
app.post("/register", (req, res) => {

    User.register(new User({ username: req.body.username }), req.body.password, (err, user) => {
        if (err) {
            console.log(err)
            return res.render('register')
        }
        passport.authenticate("local")(req, res, () => {
            res.redirect("/secret");
        })
    })
})

// Login routes
// render login form
app.get("/login", (req, res) => {
    res.render("login")
})

// login logic
app.post("/login", passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
}), (req, res) => {

})

app.get('/logout', (req, res) => {
    req.logout();
    res.redirect("/")
})

const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login")
}

app.listen(port, () => {
    console.log("Server started ....")
})