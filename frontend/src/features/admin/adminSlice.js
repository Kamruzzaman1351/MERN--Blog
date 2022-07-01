import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import adminService from "./adminService"

const admin = JSON.parse(localStorage.getItem("admin"))

const initialState = {
    admin: admin ? admin : null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    isMessage: "",
}

// Admin Login
export const adminLogin = createAsyncThunk("/admin/login", async(formData, thunkAPI) => {
    try {
        return await adminService.adminLogin(formData)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
                        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

const adminSlice = createSlice({
    name:"admin",
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.isMessage = ""
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(adminLogin.pending, (state) => {
                state.isLoading = true
            })
            .addCase(adminLogin.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.admin = action.payload
            })
            .addCase(adminLogin.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
                state.isMessage = action.payload
            })
    }
})

export const { reset } = adminSlice.actions
export default adminSlice.reducer