import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/user.slice";

export const store = configureStore({
	reducer: {
		userReducer
	}
})

export const userSelector = (state) => state.userReducer.currentUser;