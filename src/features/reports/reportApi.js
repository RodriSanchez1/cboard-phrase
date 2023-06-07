import { cboardPhraseAPI } from '../../services/api';

const reportApi = cboardPhraseAPI.injectEndpoints({
  endpoints: (builder) => ({
    trackEvent: builder.mutation({
      query: (body) => ({
        url: `/report/trackEvent`,
        method: 'POST',
        body,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useTrackEventMutation } = reportApi;
