const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "Please add name"],
        minLength: [3, "Minimum 3 char "]
    },
    email: {
        type: String,
        require: [true, "Please add email"],
        unique: [true, "Email allready be used"]
    },
    password: {
        type: String,
        require: [true, "Please add password"]
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("User", userSchema)