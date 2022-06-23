const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
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