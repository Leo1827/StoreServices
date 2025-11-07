import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth/authSlice";
import modalSlice from "./slices/modal/modalSlice";
import categorySlice from "./slices/catalog/catalogSlice"

export const store = configureStore({
    reducer:{
        auth: authSlice,
        modal: modalSlice,
        categorys: categorySlice
    }
})


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;