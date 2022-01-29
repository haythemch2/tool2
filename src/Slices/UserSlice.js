import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "default name",
  password: "123456",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    LoginAction: (state, action) => {
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
  },
});

export const { LoginAction } = userSlice.actions;

export default userSlice.reducer;
