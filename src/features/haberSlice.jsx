import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk("haberSlice/getData", async () => {
  const URL = process.env.REACT_APP_API_URL;

  const res = await axios(URL);
  return res.data.articles;
});

export const haberSlice = createSlice({
  name: "haberSlice",
  initialState: {
    news: [],
    loading: true,
  },
  reducers: {
    deleteNews: (state, { payload }) => {
      state.news = state.news.filter((a) => a.title !== payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getData.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.news = payload;
      });
  },
});

export const { deleteNews } = haberSlice.actions;
export default haberSlice.reducer;
