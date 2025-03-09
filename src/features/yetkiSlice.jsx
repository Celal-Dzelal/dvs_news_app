import { createSlice } from "@reduxjs/toolkit";

const yetkiSlice = createSlice({
  name: "yetkiSlice",
  initialState: { email: "", password: "" },
  reducers: {
    createUser: (state, { payload }) => {
      state.email = payload.email;
      state.password = payload.password;
    },
    deleteUser: (state) => {
      state.email = "";
      state.password = "";
    },
  },
});

export const { createUser, deleteUser } = yetkiSlice.actions;
export default yetkiSlice.reducer;
