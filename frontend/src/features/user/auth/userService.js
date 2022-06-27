import axios from "axios"

const API_URL = "/api/users/"

const register = async (userData) => {
    const response = await axios.post(API_URL + "signup", userData)
    if(response.data) {
        localStorage.setItem("user", JSON.stringify(response.data))
    }
    return response.data
}

//  SignIn user
const signIn = async(userData) => {
    const response = await axios.post(API_URL + "login", userData)
    if(response.data) {
        localStorage.setItem("user", JSON.stringify(response.data))
    }
    return response.data
}

// Logout
const logout = async() => {
    localStorage.removeItem("user")
} 

const userService = {
    register,
    signIn,
    logout,
}

export default userService