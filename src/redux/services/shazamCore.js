import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shamamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '0a4d12bdd2mshe224850a4d90f75p1030c7jsnbea0ab06ce7c');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/world' }),
  }),
});

export const {
  useGetTopChartsQuery,
} = shamamCoreApi;