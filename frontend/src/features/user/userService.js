import axios from "axios"

const API_URL = "/api/users/"

const register = async (userData) => {
    const response = await axios.post(API_URL + "signup", userData)
    if(response.data) {
        localStorage.setItem("user", JSON.stringify(response.data))
    }
    console.log(response)
    return response.data
}

const userService = {
    register,
}

export default userService