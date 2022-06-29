import axios from "axios"

const API_URL = "/api/posts/"
// get post
const getPost = async(token) => {
    const config = {
        headers: {
            Authorization : `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL, config)

    return response.data

}

// Create post
const addPost = async (postData, token) => {
    const config = {
        headers: {
            Authorization : `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, postData, config)
    return response.data
}

// Delete post 
const deletePost = async(id, token) => {
    const config = {
        headers: {
            Authorization : `Bearer ${token}`
        }
    }
    const response = await axios.delete(API_URL + id, config)
    return response.data
}

// Get All Posts
const getAllPosts = async() => {
    const response = await axios.get("/api/posts/allposts")
    return response.data
}

const postService = {
    getPost,
    addPost,
    deletePost,
    getAllPosts,
}

export default postService