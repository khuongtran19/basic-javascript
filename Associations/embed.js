const mongoose = require("mongoose");
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost/blog_demo", { useFindAndModify: false });


//User - email
const userSchema = new mongoose.Schema({
    email: String,
    name: String
})

const User = mongoose.model("User", userSchema);

// Post - title, content
const postSchema = new mongoose.Schema({
    title: String,
    content: String
})

const Post = mongoose.model("Post", postSchema);