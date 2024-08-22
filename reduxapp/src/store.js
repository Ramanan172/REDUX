import { configureStore } from "@reduxjs/toolkit";
import customerReducer from './slices/customerSlice';
export const store = configureStore({
    //i can't see pulg (false)
    devTools:false,
    reducer:{
       customers:customerReducer 
    }
} )