const express = require("express")
const router = express.Router()
const {getPosts, createPost, updatePost, deletePost} = require("../controllers/postController")
const {userProtect} = require("../middleware/authMiddleware")
router.route("/").get(userProtect,getPosts).post(userProtect,createPost)
router.route("/:id").delete(userProtect, deletePost).put(userProtect, updatePost)
// router.get("/", getPosts).post("/", createPost)
// router.put("/:id", updatePost)
// router.delete("/:id", deletePost)

module.exports = router