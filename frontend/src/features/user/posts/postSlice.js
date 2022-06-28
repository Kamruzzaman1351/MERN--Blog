import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postService from "./postService";
const initialState = {
    posts: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    isMessage: "",
}

// Get User Post
export const getPost = createAsyncThunk("/user/getposts", async(_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().user.user.token
        return await postService.getPost(token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
                        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Create Post 
export const addPost = createAsyncThunk("/user/addpost", async(postData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().user.user.token
        return await postService.addPost(postData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
                        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Delete Post
export const deletePost = createAsyncThunk("/user/deletepost", async(id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().user.user.token
        return await postService.deletePost(id, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
                        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPost.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getPost.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.posts = action.payload

            })
            .addCase(getPost.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
                state.isMessage = action.payload
            })
            .addCase(addPost.pending, (state) => {
                state.isLoading = true
            })
            .addCase(addPost.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.posts.push(action.payload)
                state.isMessage = action.payload
            })
            .addCase(addPost.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
                state.isMessage = action.payload
            })
            .addCase(deletePost.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deletePost.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.posts = state.posts.filter((post) => post._id !== action.payload.id)
            })
            .addCase(deletePost.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.isSuccess = false
                state.isMessage = action.payload
            })
    },
})

export const { reset } = postSlice.actions
export default postSlice.reducer