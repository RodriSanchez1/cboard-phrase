import { cboardPhraseAPI } from '../../services/api';

const categoryApi = cboardPhraseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => `categories`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetCategoriesQuery } = categoryApi;
