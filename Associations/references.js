const mongoose = require("mongoose");
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost/blog_demo_2", { useFindAndModify: false });

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
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }]
})
const User = mongoose.model("User", userSchema);

Post.create({
    title: "How to cook the best burger",
    content: "blah blah blah"
}, (err, post) => {
    console.log(post)
})