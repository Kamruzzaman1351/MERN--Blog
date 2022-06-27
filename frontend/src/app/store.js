import { configureStore } from '@reduxjs/toolkit';
import userReducer from "../features/user/auth/userSlice"
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
