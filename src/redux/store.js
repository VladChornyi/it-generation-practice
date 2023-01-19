import { configureStore } from "@reduxjs/toolkit";
import { singleUserReducer } from "./singleUser/SingleUserSlice";
import usersReducer from "./users/usersSlice";

export const store = configureStore({
	reducer: {
		users: usersReducer,
		singleUser: singleUserReducer,
	},
});
