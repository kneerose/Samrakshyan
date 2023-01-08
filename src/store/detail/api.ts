import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { predictionDto } from "../../models/dtos/prediction";
import { PREDICTION_RESPONSE_REDUCER_KEY } from "./types";

export const responseApi = createApi({
  reducerPath: PREDICTION_RESPONSE_REDUCER_KEY,
  tagTypes: ["RESPONSE"], //autofetching
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
  endpoints: (builder) => ({
    postPredictionResponse: builder.mutation<predictionDto, FormData>({
      query: (requestFileString) => ({
        url: "/files/",
        method: "POST",
        credentials: "include",
        body: requestFileString,
      }),
    }),
  }),
});

export const { usePrefetch, usePostPredictionResponseMutation } = responseApi;
