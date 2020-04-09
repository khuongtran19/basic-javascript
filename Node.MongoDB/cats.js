var mongoose = require("mongoose")
// connect to mongo database
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost/cat_app", { useFindAndModify: false });
// require for new version 5.7.1 of mongoose need to have 'useNewUrlParser', 'useUnifiedTopology' and 'useFindAndModify'
// create new or connect to available database

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
})
// define Schema
// tell javascript side to create new data follow this structure

var Cat = mongoose.model("Cat", catSchema)
// compile Scheme into model

// adding a new cat to the DB

// var george = new Cat({
//     name: "Mrs. Norris",
//     age: 7,
//     temperament: "Evil"
// })

// george.save((err, cat) => {
//     if (err) {
//         console.log("Something went wrong")
//         console.log(err)
//     } else {
//         console.log("confirm save to DB")
//         console.log(cat)
//     }
// })

Cat.find({}, (err, cat) => {
    if (err) {
        console.log("couldnt find")
        console.log(err)
    } else {
        console.log("all the cat")
        console.log(cat)
    }
})