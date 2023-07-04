import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://dev.hub.omnic.solutions/api/2.0.0/public/orders/device/34670a76-6022-4df5-ac1d-68f88589c904/cells/statuses/?type=5";


export const cellsApi = createApi({
  reducerPath: "cellsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  tagTypes: ["Cells"],
  endpoints: (builder) => ({
    fetchCells: builder.query({
        query: () => `${baseUrl}`,
        providesTags: ["Cells"],
      }),
  }),
});

export const {
  useFetchCellsQuery,
  } = cellsApi;

