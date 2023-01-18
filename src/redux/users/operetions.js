import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const usersApi = axios.create({
  baseURL: "https://63c7e1d3075b3f3a91d50f37.mockapi.io/users",
});

export const fetchUsersOperation = createAsyncThunk(
  "users/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await usersApi.get();
      console.log(thunkAPI);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
