import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../data/products";


interface CartState {
   cart: Product[]
}

const initialState: CartState = {
   cart: []
}

export const cartSlice = createSlice({
   initialState,
   name: 'cart',
   reducers: {
      /*  'state.cart' é o array com produtos     action.payload é o produto */
      addProduct: (state: CartState, action: PayloadAction<Product>) => {
         state.cart = [
            ...state.cart,
            action.payload
         ]
      },
      removeProduct: (state: CartState, action: PayloadAction<Product>) => {
         const productToRemove = action.payload
         state.cart = state.cart.filter((product) => product.id !== productToRemove.id)
      }
   }
})

export const { addProduct, removeProduct } = cartSlice.actions
