import { configureStore} from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import productReducer from "./productSlice"; 
import cartReducer from './cartSlice'
const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer, 
    carts : cartReducer
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
