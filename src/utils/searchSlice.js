import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    cacheItems: {},
    keyword: "",
  },
  reducers: {
    cacheResults: (state, action) => {
      state.cacheItems = { ...state.cacheItems, ...action.payload };
    },
    addKeywordSearch: (state, action) => {
      state.keyword = action.payload;
    },
  },
});

export const { cacheResults, addKeywordSearch } = searchSlice.actions;

export default searchSlice.reducer;
