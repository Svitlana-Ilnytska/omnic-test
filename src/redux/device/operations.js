import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://dev.hub.omnic.solutions/api/2.0.0/public/device/34670a76-6022-4df5-ac1d-68f88589c904/";

export const deviceApi = createApi({
  reducerPath: "deviceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  tagTypes: ["Device"],
  endpoints: (builder) => ({
    fetchDevice: builder.query({
        query: () => `${baseUrl}`,
        providesTags: ["Device"],
      }),
  }),
});

export const {
  useFetchDeviceQuery,
  } = deviceApi;

