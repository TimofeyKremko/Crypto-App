import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  items: [],
};

const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
});

export const { setItems } = cryptoSlice.actions;

export default cryptoSlice.reducer;