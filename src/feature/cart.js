/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state,action)=>{
             state.push(action.payload)
        },
        reset: (state)=>{
           return []
        }
    }
})

export  const {addToCart,reset}  = cartSlice.actions
export default cartSlice.reducer