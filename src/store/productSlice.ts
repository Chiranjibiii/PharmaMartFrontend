import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product, ProductState } from "../pages/auth/productTypes";
import type { Status } from "../globals/types/types";
import type { AppDispatch, RootState } from "./store";
import {API} from "../http";

const initialState: ProductState = {
  product: [],
  status: "loading",
  singleProduct:null
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct(state: ProductState, action: PayloadAction<Product[]>) {
      state.product = action.payload;
    },
    setStatus(state: ProductState, action: PayloadAction<Status>) {
      state.status = action.payload;
    },
    setSingleProduct(state: ProductState, action: PayloadAction<Product>) {
      state.singleProduct= action.payload;
    }
  }
});

export const { setProduct, setStatus,setSingleProduct } = productSlice.actions;
export default productSlice.reducer;

export function fetchProducts() {
  return async function fetchProductsThunk(dispatch: AppDispatch) {
    dispatch(setStatus("loading"));
    try {
      const response = await API.get("admin/product");
      if (response.status === 200) {
        const { data } = response.data;
        dispatch(setStatus("success"));
        dispatch(setProduct(data));
      } else {
        dispatch(setStatus("error"));
      }
    } catch (error) {
      dispatch(setStatus("error"));
    }
  };
}

export function fetchByProductId(productId:string){
    return async function fetchByProductIdThunk(dispatch:AppDispatch,getState:()=>RootState){
        const state=getState()
        const existingProduct=state.products.product.find((product:Product)=>product.id === productId)
        if(existingProduct){
            dispatch(setSingleProduct(existingProduct))
            dispatch(setStatus('success'))
        }else{
             dispatch(setStatus("loading"));
    try {
      const response = await API.get(`admin/product/${productId}`);
      if (response.status === 200) {
        const { data } = response.data;
        dispatch(setStatus("success"));
        dispatch(setSingleProduct(data));
      } else {
        dispatch(setStatus("error"));
      }
    } catch (error) {
      dispatch(setStatus("error"));
    }

        }
   
   
    }
}
