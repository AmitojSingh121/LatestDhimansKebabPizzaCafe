import {configureStore} from "@reduxjs/toolkit";
//configure store apna function aya ha reduxjstoolkit toh 
import cartSlice from "./cartSlice";
export const store = configureStore({
        reducer:{
            cart : cartSlice
        }
})