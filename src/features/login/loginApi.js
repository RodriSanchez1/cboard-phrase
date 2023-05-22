import { cboardPhraseAPI } from '../../services/api';

const loginApi = cboardPhraseAPI.injectEndpoints({
  endpoints: (builder) => ({
    addNewUser: builder.mutation({
      query: (body) => ({
        url: `/user`,
        method: 'POST',
        body,
      }),
    }),
    login: builder.mutation({
      query: (body) => ({
        url: `/user/login`,
        method: 'POST',
        body,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useAddNewUserMutation, useLoginMutation } = loginApi;
