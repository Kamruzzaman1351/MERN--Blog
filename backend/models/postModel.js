const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
    title: {
        type: String,
        require: [true, "Please add a post title"]
    },
    body: {
        type: String,
        require: [true, "Please add post body"]
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Post", postSchema)