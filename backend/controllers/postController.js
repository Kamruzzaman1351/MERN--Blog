const asyncHandler = require('express-async-handler')
const Post  = require("../models/postModel")
const User = require("../models/userModel")
// @desc Get Posts
// @route GET /api/posts
// @access Private
const getPosts = asyncHandler(async(req, res) => {
    if(!req.user) {
        res.status(401)
        throw new Error("Not authorized")
    }
    const posts = await Post.find({user:req.user.id}).sort( { createdAt: -1 } )
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
    if(!req.user) {
        res.status(401)
        throw new Error("Not Authorized to create post")
    }    
    const post = await Post.create({
        title,
        body,
        user: req.user.id
    })
    res.status(201).json(post)
})

// @desc Update Post
// @route PUT /api/post/id
// @access Private
const updatePost = asyncHandler(async(req, res) => {
    if(!req.user){
        res.status(401)
        throw new Error("Not Authorized")
    }
    const post = await Post.findById(req.params.id).where("user").equals(req.user.id)
    if(!post) {
        res.status(400)
        throw new Error("Post does not found!")
    }
    if(post.user.toString() !== req.user.id.toString()) {
        res.status(401)
        throw new Error("You Are not authorize to update post")
    }
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedPost)
})

// @desc Delete Post
// @route DELETE /api/post/id
// @access Private
const deletePost = asyncHandler( async(req, res) => {
    if(!req.user) {
        res.status(401)
        throw new Error("Not authorized")
    }
    const post = await Post.findById(req.params.id).where("user").equals(req.user.id)
    if(!post) {
        res.status(400)
        throw new Error("Post does not found")
    }
    const user = await User.findById(req.user.id)
    if(post.user.toString() !== user.id) {
        res.status(401)
        throw new Error("Not authorized working")
    }
    await Post.deleteOne(post)
    res.status(200).json({ id: post._id })
})

module.exports = {getPosts, createPost, updatePost, deletePost}