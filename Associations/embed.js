const mongoose = require("mongoose");
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost/blog_demo", { useFindAndModify: false });

// Post - title, content
const postSchema = new mongoose.Schema({
    title: String,
    content: String
})
const Post = mongoose.model("Post", postSchema);

//User - email, name
const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
})
const User = mongoose.model("User", userSchema);

// const newUser = new User({
//     email: "kevin@csun.edu",
//     name: "Kevin Tran"
// })

// newUser.posts.push({
//     title: "How to bre polyjuice potion",
//     content: "Just Kidding. Go to potions class to learn it"
// })

// newUser.save((err, user) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(user)
//     }
// })

User.findOne({ name: "Kevin Tran" }, (err, user) => {
    if (err) {
        console.log(err)
    } else {
        user.posts.push({
            title: "3 Things I really hate",
            content: "run. run. run."
        });
        user.save((err, user) => {
            if (err) {
                console.log(err)
            } else {
                console.log(user)
            }
        })
    }
})