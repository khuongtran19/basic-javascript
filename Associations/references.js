const mongoose = require("mongoose");
const Post = require("./models/post")
const User = require("./models/user")
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost/blog_demo_2", { useFindAndModify: false });

Post.create({
    title: "How to cook the best burger",
    content: "blah blah blah"
}, (err, post) => {
    User.findOne({ email: "kev@gmail.com" }, (err, foundUser) => {
        if (err) {
            console.log(err)
        } else {
            foundUser.posts.push(post)
            foundUser.save((err, data) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log(data)
                }
            })
        }
    })
})

// Find user
// Find all posts for that user

// User.findOne({ email: "kev@gmail.com" }).populate("posts").exec((err, user) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(user)
//     }
// })