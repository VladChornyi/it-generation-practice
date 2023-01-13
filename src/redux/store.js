<<<<<<< Updated upstream
import { createStore } from "redux";
import { decrementAction, incrementAction } from "./actions";
import { decrement, increment } from "./actionTypes";
import { reducer } from "./reducer";


export const store = createStore(reducer, { counter: 0, text: 'abcd' });
console.log(store)



=======

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'


import { rootReducer } from './rootReducer'
import { configureStore } from "@reduxjs/toolkit";

// const persistedGalleryReducer = persistReducer(persistConfig, galleryReducer);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
>>>>>>> Stashed changes
