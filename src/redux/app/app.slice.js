import { createSlice } from "@reduxjs/toolkit";


const initialState = {
	isLoading: true,
	displayWelcomeMessage: false
};
const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		unmountLoader: (state) => {
			return {
				...state,
				isLoading: false,
			};
		},
		renderLoader: (state) => {
			return {
				...state,
				isLoading: true
			}
		},
		renderWelcome: (state) => {
			return {
				...state,
				displayWelcomeMessage: true,
			};
		},
		unmountWelcome: (state) => {
			return {
				...state,
				displayWelcomeMessage: false
			}
		},
	}

});

export const { unmountLoader, renderLoader, renderWelcome,unmountWelcome } = appSlice.actions;

export default appSlice.reducer;

// THUNKS
