import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./Slices/DataSlice";
import userSlice from "./Slices/UserSlice";

export const store = configureStore({
  reducer: {
    data: dataSlice,
    user: userSlice,
  },
});
