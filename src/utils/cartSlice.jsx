import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
   items: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
  },
  reducers: {
    addItem: (state, action) => {
     
      state.items.push(action.payload);
      localStorage.setItem('cart',JSON.stringify(state.items))
    
    },
    removeItem: (state) => {
      state.items.pop();
       localStorage.setItem('cart',JSON.stringify(state.items))
    },
    clearCart: (state) => {
      state.items.length = 0;
       localStorage.setItem('cart',JSON.stringify(state.items))
    },
    deleteCartItem: (state, action) => {
      state.items = state.items.filter((el, index) => action.payload !== index);
       localStorage.setItem('cart',JSON.stringify(state.items))
    },
  },
});

export const { addItem, removeItem, clearCart, deleteCartItem } =
  cartSlice.actions;

export default cartSlice.reducer;
