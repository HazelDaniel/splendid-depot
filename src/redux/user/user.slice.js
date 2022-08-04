import { createSlice } from "@reduxjs/toolkit";


const initialState = {
currentUser: null,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		updateCurrentUser : (state, action)=> {
			state.currentUser = action.payload
		}
	}
});

const { updateCurrentUser } = userSlice.actions;
const userReducer = userSlice.reducer;


export default userReducer;