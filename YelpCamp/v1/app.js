const express = require("express")
const app = express();
const dotenv = require("dotenv");
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }))
dotenv.config();
const port = parseInt(process.env.APP_PORT || 3000)
app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    res.render("landing")
})

app.get("/campgrounds", (req, res) => {
    var campgrounds = [
        { name: "Salmon Creek", image: "https://cdn.pixabay.com/photo/2016/11/21/14/31/vw-bus-1845719_960_720.jpg" },
        { name: "Granite Hill", image: "https://cdn.pixabay.com/photo/2016/11/21/16/03/campfire-1846142_960_720.jpg" },
        { name: "Mount Goat's Rest", image: "https://cdn.pixabay.com/photo/2016/02/09/16/35/night-1189929_960_720.jpg" }
    ]

    res.render("campgrounds", { campgrounds: campgrounds })
})

app.post("/campgrounds", (req, res) => {
    res.send("YOU HIT THE POST ROUTE")
})

app.listen(port, () => {
    console.log(`Server running at Port ${port}`)
})