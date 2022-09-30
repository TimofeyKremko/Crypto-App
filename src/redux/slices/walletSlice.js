import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    addItem(state, action) {
      // const fintItem = state.items.find((obj) => obj.id === action.payload.id);
      // if (fintItem) {
      // fintItem.count++;
      // } else {
      state.items.push(action.payload);
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    clearItems(state, action) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearItems } = walletSlice.actions;

export default walletSlice.reducer;
