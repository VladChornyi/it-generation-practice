import { createSlice } from "@reduxjs/toolkit";
import { getUserInfo } from "../users/operetions";

const initialState = {
	isLoading: false,
	error: null,
	data: {},
	
};

const singleUserSlice = createSlice({
	name: "singleUser",
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(getUserInfo.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getUserInfo.fulfilled, (state, action) => {
				state.isLoading = false;
				state.data = action.payload;
			})
			.addCase(getUserInfo.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const singleUserReducer = singleUserSlice.reducer;
