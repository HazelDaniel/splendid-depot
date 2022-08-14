import { createSlice } from "@reduxjs/toolkit";


const initialState = {
currentUser: null,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		updateUser: (state, action) => {
			return {
				...action.payload
			}
		}
	}
});

export const { updateUser } = userSlice.actions;
const userReducer = userSlice.reducer;


export default userReducer;