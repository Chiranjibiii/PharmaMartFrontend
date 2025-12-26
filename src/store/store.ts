import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import productReducer from "./productSlice"; 
const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer, 
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
