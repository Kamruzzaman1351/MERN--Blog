const jwt = require("jsonwebtoken")
const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")


const userProtect = asyncHandler( async(req, res, next) => {
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(" ")[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await User.findById(decoded.id).where("userType").equals("user").select("-password")
            next()
        } catch (error) {
            res.status(401)
            throw new Error("Not Authorized")
        }
    }
    if(!token) {
        res.status(401)
        throw new Error("Not Authorized, No token")
    }
})


const adminProtect = asyncHandler( async(req, res, next) => {
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(" ")[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await User.findById(decoded.id).where("userType").equals(decoded.admin).select("-password")
            next()
        } catch (error) {
            res.status(401)
            throw new Error("Not Authorized")
        }
    }
    if(!token) {
        res.status(401)
        throw new Error("Not Authorized, No token")
    }
})

module.exports = {userProtect, adminProtect}

