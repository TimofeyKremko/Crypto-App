import { configureStore } from "@reduxjs/toolkit";
import crypto from "./slices/cryptoSlice";
import selectedItem from "./slices/selectedItemSlice";
import wallet from "./slices/walletSlice";
import modal from "./slices/modalSlice"

export const store = configureStore({
  reducer: {
    crypto,
    selectedItem,
    wallet,
    modal,
  },
});
