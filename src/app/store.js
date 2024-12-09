import { configureStore } from "@reduxjs/toolkit";
import { Api } from "./api";
import loginRed from "../feature/auth/login.js";
import  cartRed  from "../feature/cart.js";
import wishlistRed from "../feature/wishlist.js";
import userRed  from "../feature/user.js";

export const store = configureStore({
    reducer: {
       [Api.reducerPath]: Api.reducer,
       "login": loginRed,
       "cart": cartRed,
       "wishlist": wishlistRed,
       "user": userRed,
    },
    middleware: (getDefaultMiddleware)=>{
       return getDefaultMiddleware().concat(Api.middleware)
    }
});
