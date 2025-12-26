import type { Status } from "../../globals/types/types";
import type { Product } from "./productTypes";


export interface CartItem{
    Product:Product,
    quantity:number
}


export interface CartState{
    items:CartItem[],
    status:Status
}