import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
	cartVisible: true,
	carts: []
}

const cartSlice = createSlice({
	name: "cart",
	initialState: INITIAL_STATE,
	reducers: {
		toggleCartVisibility: (state) => {
			state.cartVisible = !state.cartVisible
		},
		addToCart: (state, action) => {
			return {
				...state,
				carts: [...state.carts, action.payload]
			}
		}
	}

});

export const { toggleCartVisibility,addToCart } = cartSlice.actions;
export default cartSlice.reducer;