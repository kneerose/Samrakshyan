import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import apiRoutes from "../../configs/apiRoutes";
import environments from "../../configs/environments";
import { predictionDto } from "../../models/dtos/prediction";
import { PREDICTION_RESPONSE_REDUCER_KEY } from "./types";

export const responseApi = createApi({
  reducerPath: PREDICTION_RESPONSE_REDUCER_KEY,
  tagTypes: ["RESPONSE"], //autofetching
  baseQuery: fetchBaseQuery({ baseUrl: environments.API_URL }),
  endpoints: (builder) => ({
    postPredictionResponse: builder.mutation<predictionDto, FormData>({
      query: (requestFileString) => ({
        url: apiRoutes.PREDICT,
        method: "POST",
        body: requestFileString,
      }),
    }),
  }),
});

export const { usePrefetch, usePostPredictionResponseMutation } = responseApi;
