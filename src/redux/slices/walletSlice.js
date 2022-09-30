import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  totalPercent: 0,
  items: [],
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.value += action.payload.value;

      } else {
        state.items.push(action.payload);
        state.totalPercent = state.items.reduce((sum, obj) => {
          const percent = +obj.changePercent24Hr
          return percent + sum;
        }, 0);
       
      }
       state.totalPrice = state.items.reduce((sum, obj) => {
         return obj.priceUsd * obj.value + sum;
       }, 0);
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload.itemId);
      state.totalPrice -= action.payload.fullPrice;
      state.totalPercent -= action.payload.percent;
    },
    clearItems(state, action) {
      state.items = [];
      state.totalPrice = 0;
      state.totalPercent = 0;
    },
  },
});

export const { addItem, removeItem, clearItems } = walletSlice.actions;

export default walletSlice.reducer;
