import { cboardPhraseAPI } from '../../services/api';

const reportApi = cboardPhraseAPI.injectEndpoints({
  endpoints: (builder) => ({
    trackEvent: builder.mutation({
      query: ({ userId, ...body }) => ({
        url: `/event/${userId}`,
        method: 'POST',
        body,
      }),
    }),
    getTopUsedSentences: builder.query({
      query: (args) => {
        const { userId, action, days } = args;
        return {
          url: '/reports/topUsedSentences',
          params: { userId, action, days },
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useTrackEventMutation, useGetTopUsedSentencesQuery } = reportApi;
