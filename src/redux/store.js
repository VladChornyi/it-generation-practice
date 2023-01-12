import counterReducer from "./counter/counterSlice";
import galleryReducer from "./gallery/gallerySlice";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    gallery: galleryReducer,
  },
});
