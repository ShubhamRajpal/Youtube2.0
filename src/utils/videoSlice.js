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
    updateCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    
  },
});

export const { getPageToken, updateCategoryId } = videoSlice.actions;

export default videoSlice.reducer;
