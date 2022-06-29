const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "User"
    },
    user_name: {
        type: String,
        require: true,
        ref: "User"
    },
    title: {
        type: String,
        require: [true, "Please add a post title"],
        minLength: [15, "Minimum 15 char "]
    },
    body: {
        type: String,
        require: [true, "Please add post body"],
        minLength: [30, "Minimum 30 char "]
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Post", postSchema)