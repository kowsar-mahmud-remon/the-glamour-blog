import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://the-glamour-blog-server.vercel.app/api/v1",
  }),
  tagTypes: ["blog", "comment"],
  endpoints: () => ({}),
});
