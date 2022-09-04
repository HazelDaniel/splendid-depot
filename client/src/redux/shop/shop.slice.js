import { createSlice } from "@reduxjs/toolkit";



const INITIAL_STATE = {
	collections: null
}
const ShopSlice = createSlice({
	name: "shop",
	initialState: INITIAL_STATE,
	reducers: {
		updateCollections: (state,action) => {
			return {
				...state,
				collections: action.payload
			}
		}
	}
})

export const { updateCollections } = ShopSlice.actions;

export default ShopSlice.reducer;