import { createReducer } from '@reduxjs/toolkit';
import { addCartItem, deleteCartItem, setCurrentItem } from '../actions';

const initialState = {
  cartItems: [],
  currentItem: null,
};

export const cartData = createReducer(
  initialState,
  builder => {
    builder
      .addCase(addCartItem, (state, action) => {
        let itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
        itemIndex !== -1 ?
          state.cartItems[itemIndex].amount++ :
          state.cartItems = [...state.cartItems, Object.assign({}, action.payload, {amount: 1})];
      })
      .addCase(deleteCartItem, (state, action) => {
        if (action.payload.deleteCopies) {
          state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.item.id)
        } else {
          let itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.item.id)
          state.cartItems[itemIndex].amount > 1 ?
            state.cartItems[itemIndex].amount-- :
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.item.id)
        }
      })
      .addCase(setCurrentItem, (state, action) => {
        state.currentItem = action.payload
      })
  }
);
