import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const BASE_URL = 'http://localhost:10010/';

export const cboardPhraseAPI = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  reducerPath: 'cboardPhraseAPI',
  tagTypes: [],
  endpoints: () => ({}),
});
