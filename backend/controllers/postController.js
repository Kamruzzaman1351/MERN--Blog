const asyncHandler = require('express-async-handler')
// @desc Get Posts
// @route GET /api/posts
// @access Private
const getPosts = asyncHandler(async(req, res) => {
    res.status(200).json({
        message: "All Posts"
    })
})

// @desc Create Post
// @route POST /api/posts
// @access Private
const createPost = asyncHandler(async(req, res) => {
    const {title, body} = req.body
    if(!title) {
        res.status(400)
        throw new Error("Please Add a title")
    }
    if(!body) {
        res.status(400)
        throw new Error("Please Add a body")
    }
    console.log(res.statusCode)
    res.status(201).json({
        message: "Create Post"
    })
})

// @desc Update Post
// @route PUT /api/post/id
// @access Private
const updatePost = asyncHandler(async(req, res) => {
    res.status(200).json({
        message: `Post updated ID: ${req.params.id}`
    })
})

// @desc Delete Post
// @route DELETE /api/post/id
// @access Private
const deletePost = asyncHandler( async(req, res) => {
    res.status(200).json({
        message: `Post deleted ID: ${req.params.id}`
    })
})

module.exports = {getPosts, createPost, updatePost, deletePost}