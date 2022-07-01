const asyncHandler = require('express-async-handler')
const User = require("../models/userModel")
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")


// @desc Login Admin
// @route POST /api/admin/login
// @access Admin
const adminLogin = asyncHandler( async(req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({email}).where("userType").equals("admin")
    if(!user) {
        res.status(401)
        throw new Error("Not valid user")
    }
    if(user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({
            name: user.name,
            email: user.email,
            token: createToken(user._id, "admin")
        }) 

    } else {
        res.status(401)
        throw new Error("Invalid User")
    }
})



// Create JWT
const createToken = (id, admin) => {
    return jwt.sign({id, admin}, process.env.JWT_SECRET, {expiresIn:"120d"})
} 


module.exports = {
    adminLogin,
}