import { configureStore } from '@reduxjs/toolkit';
import userReducer from "../features/user/auth/userSlice"
import postReducer from "../features/user/posts/postSlice"
export const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postReducer,
  },
});
