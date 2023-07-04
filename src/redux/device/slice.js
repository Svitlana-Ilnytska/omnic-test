import { createSlice } from "@reduxjs/toolkit";
import { useFetchDeviceQuery } from "./operations";

const deviceSlice = createSlice({
  name: "device",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder.addCase(useFetchDeviceQuery.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(useFetchDeviceQuery.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(useFetchDeviceQuery.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  },
});

export const { } = deviceSlice.actions;

export default deviceSlice.reducer;