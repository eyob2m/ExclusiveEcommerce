/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: 'login',
    initialState: false,
    reducers: {
        loggedin: (state,action)=>{
               return state = action.payload
        }
    }
})

export  const {loggedin, loggedout}  = loginSlice.actions
export default loginSlice.reducer