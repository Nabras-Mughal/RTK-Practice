import { configureStore } from "@reduxjs/toolkit";
import todoslice from "./features/todo/todo";
import { setupListeners } from "@reduxjs/toolkit/query";
import { jsonServerapi } from "./services/jsonserverapi";

export const store = configureStore({
  reducer: {
    todo: todoslice,
    [jsonServerapi.reducerPath]: jsonServerapi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jsonServerapi.middleware),
});

setupListeners(store.dispatch);
