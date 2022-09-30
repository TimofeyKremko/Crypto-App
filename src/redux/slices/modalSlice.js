import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  opened: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setCurrencyValue(state, action) {
      state.value = action.payload;
    },
    setOpenModal(state, action) { 
      state.opened = action.payload;
    }
  },
});

export const { setCurrencyValue, setOpenModal } = modalSlice.actions;

export default modalSlice.reducer;
