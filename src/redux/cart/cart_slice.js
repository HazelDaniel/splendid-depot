import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
	cartVisible: true,
}

const cartSlice = createSlice({
	name: "cart",
	initialState: INITIAL_STATE,
	reducers: {
		toggleCartVisibility: (state) => {
			state.cartVisible = !state.cartVisible
		}
	}

});

const { toggleCartVisibility } = cartSlice.actions;
export default cartSlice.reducer;