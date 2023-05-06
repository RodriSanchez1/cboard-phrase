import { createSlice, createSelector } from '@reduxjs/toolkit';

import { DEFAULT_COMMUNICATORS } from './communicator.constants';

const defaultCommunicatorID = 'cboard_default';

const initialState = {
  communicators: DEFAULT_COMMUNICATORS,
  activeCommunicatorId: defaultCommunicatorID,
};

export const communicatorSlice = createSlice({
  name: 'communicator',
  initialState,
  reducers: {
    setActiveCommunicatorId: (state, action) => {
      state.activeCommunicatorId = action.payload;
    },
  },
});

export const { setActiveCommunicatorId } = communicatorSlice.actions;

const selectCommunicators = (state) => state.communicator.communicators;
const selectActiveCommunicatorId = (state) =>
  state.communicator.activeCommunicatorId;

export const selectActiveCommunicator = createSelector(
  [selectCommunicators, selectActiveCommunicatorId],
  (communicators, activeCommunicatorId) =>
    communicators.filter((com) => com.id === activeCommunicatorId)[0]
);

export default communicatorSlice.reducer;
