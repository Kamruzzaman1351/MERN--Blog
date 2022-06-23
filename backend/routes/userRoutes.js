const express = require("express")
const {loginUser, signUpUser, showUser, allUsers} = require("../controllers/userController")
const router = express.Router()

router.get("/all", allUsers)
router.post("/login", loginUser)
router.post("/signup", signUpUser)
router.get("/profile", showUser)


module.exports = router