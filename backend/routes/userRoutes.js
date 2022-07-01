const express = require("express")
const {loginUser, signUpUser, showUser, allUsers} = require("../controllers/userController")
const {userProtect, adminProtect} = require("../middleware/authMiddleware")
const router = express.Router()
router.get("/all", adminProtect, allUsers)
router.post("/login", loginUser)
router.post("/signup", signUpUser)
router.get("/profile", userProtect, showUser)


module.exports = router