import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: [],
  filter: "",
};

const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    addImage(state, action) {
      state.images = [...state.images, action.payload];
    },
    deleteImage(state, action) { 
      state.images = state.images.filter(image => image.id !== action.payload);
    }
  },
});

const { actions, reducer } = gallerySlice;

export const { addImage, deleteImage } = actions;

export default reducer;
