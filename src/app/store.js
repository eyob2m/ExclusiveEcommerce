import { configureStore } from "@reduxjs/toolkit";
import { Api } from "./api";
import loginRed from "../feature/auth/login.js";
import  cartRed  from "../feature/cart.js";

export const store = configureStore({
    reducer: {
       [Api.reducerPath]: Api.reducer,
       "login": loginRed,
       "cart": cartRed,
    },
    middleware: (getDefaultMiddleware)=>{
       return getDefaultMiddleware().concat(Api.middleware)
    }
});
