import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    pageToken: "",
    categoryId: 0,
  },
  reducers: {
    getPageToken: (state, action) => {
      state.pageToken = action.payload;
    },
    getCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
  },
});

export const { getPageToken,getCategoryId } = videoSlice.actions;

export default videoSlice.reducer;
