import { configureStore } from '@reduxjs/toolkit';
import userReducer from "../features/user/auth/userSlice"
import postReducer from "../features/user/posts/postSlice"
import adminReducer from "../features/admin/adminSlice"
export const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postReducer,
    admin: adminReducer,
  },
});
