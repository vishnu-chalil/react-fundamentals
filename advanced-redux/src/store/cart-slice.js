import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    stateChanged:false,
  },
  reducers: {

    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {

      state.stateChanged = true;
      const newItem = action.payload;
      const exisitingItem = state.items.find((item) => item.id === newItem.id);

      state.totalQuantity++;
      if (!exisitingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title
        });
      }
      else {
        exisitingItem.quantity++;
        exisitingItem.totalPrice = exisitingItem.totalPrice + newItem.price;

      }
    },

    removeItemFromCart(state, action) {

      const id = action.payload;
      const exisitingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.stateChanged=true;
      if (exisitingItem && exisitingItem.quantity === 1) {

        state.items = state.items.filter(item => item.id !== id);

      } else {
        exisitingItem.quantity--;
        exisitingItem.totalPrice = exisitingItem.totalPrice - exisitingItem.price;
      }


    },
  },
});



export default cartSlice;

export const cartActions = cartSlice.actions;