const asyncHandler = require('express-async-handler')
const User = require("../models/userModel")
// @desc Register User
// @route POST /user/signup
// @access Open
const signUpUser = asyncHandler(async(req,res) => {
    const {name, email, password} = req.body
    if(!name || !email || !password) {
        res.status(400)
        throw new Error("Please provide required credentials")
    }
    const user = await User.create({
        name,
        email,
    })
    res.status(200).json(user)
})

// @desc Login User
// @route POST /user/login
// @access User
const loginUser = asyncHandler(async(req, res) => {
    res.status(200).json({
        message: "User Login"
    })
})

// @desc Show User Info
// @route GET /user/profile
// @access Only User
const showUser = asyncHandler(async(req, res) => {
    res.status(200).json({
        message: "User Info"
    })
})

// @desc Show User List
// @route GET /user/all
// @access Only Admin
const allUsers = asyncHandler(async(req, res) => {
    res.status(200).json({
        message: "All Users"
    })
})

module.exports = {signUpUser, loginUser, showUser, allUsers}