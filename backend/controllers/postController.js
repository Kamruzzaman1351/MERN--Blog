const asyncHandler = require('express-async-handler')
const Post  = require("../models/postModel")
// @desc Get Posts
// @route GET /api/posts
// @access Private
const getPosts = asyncHandler(async(req, res) => {
    const posts = await Post.find()
    res.status(200).json(posts)
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
    const post = await Post.create({
        title,
        body
    })
    res.status(201).json(post)
})

// @desc Update Post
// @route PUT /api/post/id
// @access Private
const updatePost = asyncHandler(async(req, res) => {
    const post = await Post.findById(req.params.id)
    if(!post) {
        res.status(400)
        throw new Error("Post does not found!")
    }
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedPost)
})

// @desc Delete Post
// @route DELETE /api/post/id
// @access Private
const deletePost = asyncHandler( async(req, res) => {
    const post = await Post.findById(req.params.id)
    if(!post) {
        res.status(400)
        throw new Error("Post does not found")
    }
    await Post.deleteOne(post)
    res.status(200).json({ id: post._id })
})

module.exports = {getPosts, createPost, updatePost, deletePost}