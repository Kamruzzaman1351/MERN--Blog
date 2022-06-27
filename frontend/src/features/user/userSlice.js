import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import userService from "./userService"
const user = JSON.parse(localStorage.getItem("user"))

const initialState = {
    user: user ? user : null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    isMessage: ''
}

// Register User
export const register = createAsyncThunk("user/register", async(user, thunkAPI) => {
    try {
        return await userService.register(user)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
                        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// SignIn User
export const signIn = createAsyncThunk("user/signin", async(user, thunkAPI) => {
    try {
        return await userService.signIn(user)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
                        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})
// Logout user
export const logout = createAsyncThunk("user/logout", async() => {
    await userService.logout()
})

export const userSlice = createSlice({
    name: "user",
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
            .addCase(register.pending, (state) => {
                state.isLoading = true
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload

            } )
            .addCase(register.rejected, (state, action) => {
                state.isSuccess = false
                state.isError = true
                state.isLoading = false
                state.isMessage = action.payload
                state.user = null
            })
            .addCase(signIn.pending, (state) => {
                state.isLoading = true
            })
            .addCase(signIn.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(signIn.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
                state.isMessage = action.payload
                state.user = null
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null
            })
    }

})

export const {reset} = userSlice.actions
export default userSlice.reducer