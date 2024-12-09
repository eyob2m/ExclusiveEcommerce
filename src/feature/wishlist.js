/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: [],
    reducers: {
        addTowishlist: (state,action)=>{
             state.push(action.payload)
        },
        removeFromWishlist: (state,action)=>{
            return state.filter((item) => item.id !== action.payload);
       },
        reset: (state)=>{
            return []
        }
    }
})

export  const {addTowishlist,removeFromWishlist,reset}  = wishlistSlice.actions
export default wishlistSlice.reducer