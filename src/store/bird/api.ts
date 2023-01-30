import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import apiRoutes from "../../configs/apiRoutes";
import environments from "../../configs/environments";
import { BIRD_REDUCER_KEY } from "./types";

export const birdApi = createApi({
  reducerPath: BIRD_REDUCER_KEY,
  tagTypes: ["BIRD"], //autofetching
  baseQuery: fetchBaseQuery({
    baseUrl: environments.DB_URL,
    headers: {
      accept: "application/json",
    },
  }),
  endpoints: (builder) => ({
    getAllBirdDetails: builder.query<any, void>({
      query: () => apiRoutes.BIRD_LIST,
      providesTags: ["BIRD"],
    }),
    getBirdByIdentifier: builder.query<any, string>({
      query: (id) => `${apiRoutes.SINGLE_BIRD}/${id}`,
      providesTags: ["BIRD"],
    }),
    // getMediaByPath: builder.query<any, string>({
    //   query: (path) => `${apiRoutes.MEDIA}?media_path=${path}`,
    //   providesTags: ["BIRD"],
    // }),
  }),
});

export const {
  usePrefetch,
  useGetAllBirdDetailsQuery,
  useGetBirdByIdentifierQuery,
  //   useGetMediaByPathQuery,
} = birdApi;
