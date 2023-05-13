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
    deleteCategory: (state, action) => {
      const { id } = action.payload;
      const categoryIndex = state.categories.findIndex((cat) => cat.id === id);
      state.categories.splice(categoryIndex, 1);
    },
  },
  extraReducers: (builder) => {
    builder.addCase('category/updateCategories', (state, action) => {
      const newCategories = action.payload;
      const newCategoriesIds = newCategories.map((cat) => cat.id);
      const activeCommunicatorIdIndex = state.communicators.findIndex(
        (communicator) => communicator.id === state.activeCommunicatorId
      );
      state.communicators[activeCommunicatorIdIndex].categories =
        newCategoriesIds;
    });
  },
});

export const { setActiveCommunicatorId, deleteCategory } =
  communicatorSlice.actions;

const selectCommunicators = (state) => state.communicator.communicators;

const selectActiveCommunicatorId = (state) =>
  state.communicator.activeCommunicatorId;

export const selectActiveCommunicator = createSelector(
  [selectCommunicators, selectActiveCommunicatorId],
  (communicators, activeCommunicatorId) =>
    communicators.filter((com) => com.id === activeCommunicatorId)[0] ||
    DEFAULT_COMMUNICATORS[0]
);

export default communicatorSlice.reducer;
