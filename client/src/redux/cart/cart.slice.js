import { createSlice } from "@reduxjs/toolkit";
import {checkAndAddITem, checkAndRemoveItem, clearItem} from "./cart.slice.utils";
import { current } from "@reduxjs/toolkit";

const INITIAL_STATE = {
	cartVisible: false,
	carts: []
}

const cartSlice = createSlice({
	name: "cart",
	initialState: INITIAL_STATE,
	reducers: {
		toggleCartVisibility: (state) => {
			// console.log(state)
			state.cartVisible = !state.cartVisible
		},
		addToCart: (state, action) => {
			return checkAndAddITem(current(state),action.payload);
		},
		removeFromCart: (state,action) => {
			return checkAndRemoveItem(current(state), action.payload);
		},
		clearFromCart: (state, action) => {
			return clearItem(current(state), action.payload);
		},
	}

});

export const { toggleCartVisibility,addToCart,removeFromCart,clearFromCart } = cartSlice.actions;
export default cartSlice.reducer;