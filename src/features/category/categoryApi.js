import { cboardPhraseAPI } from '../../services/api';

const categoryApi = cboardPhraseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => `categories`,
    }),
    updateCategories: builder.mutation({
      query: ({ userEmail, ...body }) => ({
        url: `/category/${userEmail}`,
        method: 'PUT',
        body,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetCategoriesQuery, useUpdateCategoriesMutation } =
  categoryApi;
