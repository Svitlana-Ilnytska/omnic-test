import { configureStore } from "@reduxjs/toolkit";
import { cellsApi } from "./cells/operations";
import { deviceApi } from "./device/operations";

const store = configureStore({
  reducer: {
    [cellsApi.reducerPath]: cellsApi.reducer,
    [deviceApi.reducerPath]: deviceApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cellsApi.middleware, deviceApi.middleware),
});

export default store;