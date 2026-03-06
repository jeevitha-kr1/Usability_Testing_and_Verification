import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    url: {},
    genres: {},
  },
  reducers: {
    setApiConfiguration: (state, action) => {
      //we want to update the url in our state with the url we get from the api
      state.url = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setApiConfiguration } = homeSlice.actions;
export default homeSlice.reducer;
