import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    pageToken: "",
  },
  reducers: {
    getPageToken: (state, action) => {
      state.pageToken = action.payload;
    },
  },
});

export const { getPageToken } = videoSlice.actions;

export default videoSlice.reducer;
