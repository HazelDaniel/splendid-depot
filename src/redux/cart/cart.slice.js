import { createSlice } from "@reduxjs/toolkit";
import checkAndAddITem from "./cart.slice.utils";
import { current } from "@reduxjs/toolkit";

const INITIAL_STATE = {
	cartVisible: true,
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

			// console.log(state,action.payload)
			return checkAndAddITem(current(state),action.payload);
		}
	}

});

export const { toggleCartVisibility,addToCart } = cartSlice.actions;
export default cartSlice.reducer;