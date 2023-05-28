import { cboardPhraseAPI } from '../../services/api';

const userApi = cboardPhraseAPI.injectEndpoints({
  endpoints: (builder) => ({
    updateUser: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/user/${id}`,
        method: 'PUT',
        body,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useUpdateUserMutation } = userApi;
