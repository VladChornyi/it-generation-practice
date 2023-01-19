import { createSlice } from "@reduxjs/toolkit";
import { deleteUser, fetchUsersOperation, getUserInfo } from "./operetions";

const pending = (state) => {
	state.isLoading = true;
};

const fulfilled = (state, action) => {
	state.isLoading = false;
	state.error = null;
	state.items = action.payload;
};

const rejected = (state, action) => {
	state.isLoading = false;
	state.error = action.payload;
};

const usersSlice = createSlice({
	name: "users",
	initialState: { items: [], isLoading: false, error: null },
	extraReducers: (builder) => {
		builder
			.addCase(fetchUsersOperation.pending, pending)
			.addCase(fetchUsersOperation.fulfilled, fulfilled)
			.addCase(fetchUsersOperation.rejected, rejected)

			.addCase(deleteUser.pending, pending)
			.addCase(deleteUser.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				state.items = state.items.filter(
					(item) => item.id !== action.payload.id
				);
			})
			.addCase(deleteUser.rejected, rejected);
	},
});
const { reducer } = usersSlice;

export default reducer;
