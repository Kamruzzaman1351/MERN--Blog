const express = require("express")
const router = express.Router()
const {getPosts, createPost, updatePost, deletePost} = require("../controllers/postController")

router.route("/").get(getPosts).post(createPost)
router.route("/:id").delete(deletePost).put(updatePost)
// router.get("/", getPosts).post("/", createPost)
// router.put("/:id", updatePost)
// router.delete("/:id", deletePost)

module.exports = router