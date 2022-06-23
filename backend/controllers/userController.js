const asyncHandler = require('express-async-handler')
// @desc Register User
// @route POST /user/signup
// @access Open
const signUpUser = asyncHandler(async(req,res) => {
    res.status(200).json({
        message: "User Created"
    })
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