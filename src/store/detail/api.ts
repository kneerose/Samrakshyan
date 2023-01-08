import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { predictionDto } from "../../models/dtos/prediction";
import { PREDICTION_RESPONSE_REDUCER_KEY } from "./types";

export const responseApi = createApi({
  reducerPath: PREDICTION_RESPONSE_REDUCER_KEY,
  tagTypes: ["RESPONSE"], //autofetching
  baseQuery: fetchBaseQuery({
    baseUrl: "http://ec2-3-145-63-255.us-east-2.compute.amazonaws.com:8000",
  }),
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
