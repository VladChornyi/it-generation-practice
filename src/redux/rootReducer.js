import { combineReducers } from "redux";
import counterReducer from "./counter/counterSlice";
import galleryReducer from "./gallery/gallerySlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'images',
  storage,
  blacklist: ['filter'],
  
}

const persistedGalleryReducer = persistReducer(persistConfig, galleryReducer);

export const rootReducer = combineReducers({
    counter: counterReducer,
    gallery: persistedGalleryReducer,
});