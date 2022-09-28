import { configureStore } from "@reduxjs/toolkit";
import crypto from "./slices/cryptoSlice";
import selectedItem from "./slices/selectedItemSlice";

export const store = configureStore({
  reducer: {
    crypto,
    selectedItem,
  },
});
