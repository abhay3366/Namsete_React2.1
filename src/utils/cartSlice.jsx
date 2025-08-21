import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
    deleteCartItem:(state,action)=>{
      console.log(action)
      console.log(state)
    }
  },
});

export const { addItem, removeItem, clearCart,deleteCartItem } = cartSlice.actions;

export default cartSlice.reducer;
