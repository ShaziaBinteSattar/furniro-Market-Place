import { createSlice } from "@reduxjs/toolkit";

const cartSlice =  createSlice(
    {
        name:"cart",
        initialState:{
            cartItems:[]
        },
        reducers:{
            addToCart: (state, action) => {
                const existingItem = state.cartItems.find((item) => item.id === action.payload.id);
                if (existingItem) {
                  existingItem.quantity = action.payload.quantity;
                  console.log("already");
                  
                } else {
                  state.cartItems.push({ ...action.payload });
                }},
            removeToCart:(state,action)=>{
                state.cartItems = state.cartItems.filter((item)=>item.id !== action.payload.id)

            },
            decreaseQuantity:(state,action)=>{
                const existingItem = state.cartItems.find((item) => item.id === action.payload.id);

                if(existingItem.quantity == 1){
                    state.cartItems = state.cartItems.filter((item)=>item.id !== action.payload.id)
                }
                else{
                    existingItem.quantity = existingItem.quantity - 1

                }

            },
            increaseQuantity:(state,action)=>{
                const existingItem = state.cartItems.find((item) => item.id === action.payload.id);
                if(existingItem.quantity > 10){
                    console.log("inventry end");
                    
                }
                else{
                    existingItem.quantity = existingItem.quantity + 1

                }
            },
            

            getTotalItems: (state) => {
                return state.cartItems.reduce((total, item) => total + item.quantity, 0);
              }
              
              
                }
            
            
            }
)

export const { addToCart, removeToCart,getTotalItems,increaseQuantity,decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;