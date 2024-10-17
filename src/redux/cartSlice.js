import { createSlice } from "@reduxjs/toolkit";
import { products } from "../constants";

const initialState = {
    cart: [],
    item: products,
    subTotal: 0,
    shipping: 0,
    total: 0,
    totalQuantity: 0,
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {

            const isItemExist = state.cart.findIndex((item) => item.id === action.payload.id)

            if(isItemExist >= 0){
                state.cart[isItemExist].quantity += 1;
                state.cart[isItemExist].selectedSize = action.payload.selectedSize;
            } else{
                state.cart.push(action.payload)
            }
            
        },

        increment: (state, action) => {
            state.cart = state.cart.map((item) => {
              if (item.id === action.payload) {
                return { ...item, quantity: item.quantity + 1 };
              }
              return item;
            });
          },

        decrement: (state, action)=>{

            const item = state.cart.find((i) => i.id === action.payload)

            if(item.quantity > 1){
                state.cart.forEach((i)=>{
                    if(i.id === item.id) i.quantity -= 1
                })
            }
        },

        deleteHandler: (state, action)=>{
            state.cart = state.cart.filter((item) => item.id !== action.payload)
        },

        calculatePrice: (state) => {
    let sum = 0;

    // Ensure the price and quantity are valid numbers for each item
    state.cart.forEach((item) => {
        const itemPrice = Number(item.price) || 0;  // Fallback to 0 if price is invalid
        const itemQuantity = Number(item.quantity) || 1;  // Fallback to 1 if quantity is invalid
        sum += itemPrice * itemQuantity;
    });

    state.subTotal = +( sum.toFixed(2));
    if(state.cart.length >=1){
    state.shipping = state.subTotal > 5000 ? 0 : 99;}
    state.total = +(state.subTotal + state.shipping).toFixed(2);
}
    },

})

export const { addToCart, getCartTotal, decrement, increment, deleteHandler, calculatePrice, } = cartSlice.actions;

export default cartSlice.reducer