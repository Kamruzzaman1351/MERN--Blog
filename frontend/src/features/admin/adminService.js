import axios from "axios"

const API_URL = "/api/admin/"

const adminLogin = async (formData) => {
    const response = await axios.post(API_URL + "login", formData)
    localStorage.setItem("admin", JSON.stringify(response.data))
    return response.data
}

const adminLogout = async() => {
    localStorage.removeItem("admin")
}

// Get Users
const getUsers = async (token) => {
    const config = {
        headers: {
            Authorization : `Bearer ${token}`
        }
    }
    const response = await axios.get("/api/users/all", config)
    return response.data
}

const adminService = {
    adminLogin,
    adminLogout,
    getUsers,
}

export default adminService