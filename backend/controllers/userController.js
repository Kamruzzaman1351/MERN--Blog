const asyncHandler = require('express-async-handler')
const User = require("../models/userModel")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
// @desc Register User
// @route POST /api/users/signup
// @access Open
const signUpUser = asyncHandler(async(req,res) => {
    const {name, email, password} = req.body
    if(!name || !email || !password) {
        res.status(400)
        throw new Error("Please provide required credentials")
    }
    const userExist = await User.findOne({email})
    if(userExist) {
        res.status(400)
        throw new Error("User allready exists")
    }
    // Hash password
    const salt = await bcrypt.genSaltSync(10)
    const hashedPassword = await bcrypt.hashSync(password, salt)
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    })
    if(user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: createToken(user._id)
        })
    } else{
        res.status(400)
        throw new Error("Invalid User")
    }
})

// @desc Login User
// @route POST /api/users/login
// @access User
const loginUser = asyncHandler(async(req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: createToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error("Invalid credentials")
    }
})

// @desc Show User Info
// @route GET /api/users/profile
// @access Only User
const showUser = asyncHandler(async(req, res) => {
    if(!req.user) {
        res.status(400)
        throw new Error("User Not Authorized")        
    }
    const user = await User.findById(req.user.id)
    const{_id, name, email} = user
    res.status(200).json({
        id: _id,
        name,
        email
    })
})

// @desc Show User List
// @route GET /api/users/all
// @access Only Admin
const allUsers = asyncHandler(async(req, res) => {
    const users = await User.find().sort( { createdAt: -1 } )
    res.status(200).json(users)
})

// Create JWT
const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn:"120d"})
}  
module.exports = {signUpUser, loginUser, showUser, allUsers}