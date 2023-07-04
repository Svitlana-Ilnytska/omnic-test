import { createSlice } from "@reduxjs/toolkit";
import { useFetchCellsQuery } from "./operations";

const cellsSlice = createSlice({
  name: "cells",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder.addCase(useFetchCellsQuery.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(useFetchCellsQuery.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(useFetchCellsQuery.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  },
});

export const {} = cellsSlice.actions;

export default cellsSlice.reducer;
