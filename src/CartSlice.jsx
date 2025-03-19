import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const {name, image, cost} = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({name, image, cost, quantity: 1});
      }
      console.log("addItem:" + name);
    
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload);
      console.log("removeItem: " + action.payload);
    },
    updateQuantity: (state, action) => {
      const {name, quantity} = action.payload;
      const currentItem = state.items.find(item => item.name === name);
      if (currentItem) {
        currentItem.quantity = quantity;
        console.log(currentItem.name + "current quantity: " + currentItem.quantity);
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
