// @desc Get Posts
// @route GET /api/posts
// @access Private
const getPosts = (req, res) => {
    res.status(200).json({
        message: "All Posts"
    })
}

// @desc Create Post
// @route POST /api/posts
// @access Private
const createPost = (req, res) => {
    res.status(201).json({
        message: "Create Post"
    })
}

// @desc Update Post
// @route PUT /api/post/id
// @access Private
const updatePost = (req, res) => {
    res.status(200).json({
        message: `Post updated ID: ${req.params.id}`
    })
}

// @desc Delete Post
// @route DELETE /api/post/id
// @access Private
const deletePost = (req, res) => {
    res.status(200).json({
        message: `Post deleted ID: ${req.params.id}`
    })
}

module.exports = {getPosts, createPost, updatePost, deletePost}