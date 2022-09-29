import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: {},
  history: {
    prices: [],
    dates: [],
  },
};

const selectedItemSlice = createSlice({
  name: "selectedItem",
  initialState,
  reducers: {
    setSelectedItem(state, action) {
      state.item = action.payload;
    },
    setItemHistory(state, action) {
      state.history.prices = [];
      state.history.dates = [];
      action.payload.forEach((element) => {

        state.history.prices.push(element.priceUsd);
        state.history.dates.push(element.date.slice(0,10));
      });
    },
  },
});

export const { setSelectedItem, setItemHistory  } =
  selectedItemSlice.actions;

export default selectedItemSlice.reducer;
