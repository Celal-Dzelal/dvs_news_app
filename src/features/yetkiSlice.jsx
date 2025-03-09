import { createSlice } from "@reduxjs/toolkit";

const yetkiSlice = createSlice({
  name: "yetkiSlice",
  initialState: { email: "", password: "" },
  reducers: {
    createUser: (state, { payload }) => {
      state.email = payload.email;
      state.password = payload.password;
    },
  },
});

export const { createUser } = yetkiSlice.actions;
export default yetkiSlice.reducer;
