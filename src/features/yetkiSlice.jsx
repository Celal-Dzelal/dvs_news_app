import { createSlice } from "@reduxjs/toolkit";

const yetkiSlice = createSlice({
  name: "yetkiSlice",
  initialState: { user: null },
  reducers: {
    createUser: (state, { payload }) => {
      state.user = payload;
    },
    deleteUser: (state) => {
      state.user = null;
    },
  },
});

export const { createUser, deleteUser } = yetkiSlice.actions;
export default yetkiSlice.reducer;
