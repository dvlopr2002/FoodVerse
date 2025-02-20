import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
    name: "cart",
    initialState: {
        cart: []
    },
    reducers: {
        addCart: (state, action) => {
            state.cart.push(action.payload);
        },
        deleteCart: (state, action) => {
            state.cart = state.cart.filter((cartItems) => cartItems.id !== action.payload)
        },
        emptyCart: (state, action) => {
            state.cart.length = 0;
        }
    }
});

export const { addCart, deleteCart, emptyCart } = cartslice.actions;
export default cartslice.reducer;
