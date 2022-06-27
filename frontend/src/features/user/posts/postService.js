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
    const user = JSON.parse(localStorage.getItem("user"))
    const response = await axios.post(API_URL, postData, config)
    return response.data
}


const postService = {
    getPost,
    addPost,
}

export default postService