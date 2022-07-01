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

const adminService = {
    adminLogin,
    adminLogout,
}

export default adminService