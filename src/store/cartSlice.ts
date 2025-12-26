import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartItem, CartState } from "../pages/auth/cartTypes";
import type { Status } from "../globals/types/types";
import type { AppDispatch } from "./store";
import { APIAuthenticated } from "../http";



const initialState:CartState={
    items:[],
    status:'loading'
}


const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers : {
        setItems(state:CartState,action:PayloadAction<CartItem[]>){
            state.items = action.payload
        },
        setStatus(state:CartState,action:PayloadAction<Status>){
            state.status = action.payload
        }
    }
})

export const {setItems,setStatus}= cartSlice.actions
export default cartSlice.reducer


export function addToCart(productId:string){
    return async function addToCartThunk(dispatch : AppDispatch ) {
        dispatch(setStatus('loading'))
        try {
            const response = await APIAuthenticated.post('/customer/cart',{
                productId,
                quantity : 1
            })
            if(response.status==200){
                dispatch(setStatus('success'))
                dispatch(setItems(response.data.data))
            }else{
                dispatch(setStatus('error'))
            }
        } catch (error) {
             dispatch(setStatus('error'))

        }
        
    }
}


export function fetchCartItems(){
    return async function fetchCartItemsThunk(dispatch : AppDispatch ) {
        dispatch(setStatus('loading'))
        try {
            const response = await APIAuthenticated.get('/customer/cart')
            if(response.status==200){
                dispatch(setStatus('success'))
                dispatch(setItems(response.data.data))
            }else{
                dispatch(setStatus('error'))
            }
        } catch (error) {
             dispatch(setStatus('error'))

        }
        
    }
}