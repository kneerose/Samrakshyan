import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { predictionDto } from '../../models/dtos/prediction';
import { PREDICTION_RESPONSE_REDUCER_KEY } from './types';

export const responseApi = createApi({
    reducerPath: PREDICTION_RESPONSE_REDUCER_KEY,
    tagTypes: ['RESPONSE'], //autofetching
    baseQuery: fetchBaseQuery({ baseUrl:'http://127.0.0.1:8000' }),
    endpoints: (builder) => ({
        postPredictionResponse: builder.mutation<predictionDto, string>({
            query: (requestFileString) => ({
                url:'/files/',
                method:'POST',
                headers:{
                    'content-type': 'application/json',
                    accept: 'application/json'
                },
                body:requestFileString
                
            }),
        })
    })
});

export const { usePrefetch, usePostPredictionResponseMutation } = responseApi;
