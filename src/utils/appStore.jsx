import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
const appStore = configureStore({
    reducer: {
        items: cartReducer
    }
});
export default appStore;