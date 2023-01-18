import { createSlice } from "@reduxjs/toolkit";
import { fetchUsersOperation } from "./operetions";

const usersSlice = createSlice({
  name: "users",
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersOperation.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchUsersOperation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchUsersOperation.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
const { actions, reducer } = usersSlice;

export default reducer;
