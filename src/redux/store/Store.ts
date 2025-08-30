import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../api/baseApi";

export const store = configureStore({ reducer: {
      [baseApi.reducerPath] : baseApi.reducer,
},
middleware :(getdefaultMiddleware)=>getdefaultMiddleware().concat(baseApi.middleware)
 });

export type Rootstate = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;