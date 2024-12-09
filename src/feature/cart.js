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
            state = []
        }
    }
})

export  const {addToCart,reset}  = cartSlice.actions
export default cartSlice.reducer