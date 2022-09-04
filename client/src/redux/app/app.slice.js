import { createSlice } from "@reduxjs/toolkit";


const initialState = {
	isLoading: true,
	displayWelcomeMessage: false,
	displayPaymentMessage: false
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
		renderPaymentPopup: (state,action) => {
			return {
				...state,
				displayPaymentMessage: true,
				paymentStatus: action.payload
			}
		},
		unmountPaymentPopup: (state,action) => {
			return {
				...state,
				displayPaymentMessage: false,
				paymentStatus: action.payload
			}
		}
	}

});

export const { unmountLoader, renderLoader, renderWelcome,unmountWelcome,renderPaymentPopup,unmountPaymentPopup } = appSlice.actions;

export default appSlice.reducer;

// THUNKS
