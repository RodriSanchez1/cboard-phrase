import { createSlice, createSelector } from '@reduxjs/toolkit';

import { DEFAULT_CATEGORIES } from './category.constants';

const initialState = {
  categories: DEFAULT_CATEGORIES,
  activeCategoryId: DEFAULT_CATEGORIES[0].id,
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setActiveCategoryId: (state, action) => {
      state.activeCategoryId = action.payload;
    },
    addCategory: (state, action) => {
      state.categories.push(action.payload);
    },
    updateCategory: (state, action) => {
      const { id } = action.payload;
      const categoryIndex = state.categories.findIndex((cat) => cat.id === id);
      state.categories[categoryIndex] = action.payload;
    },
    deleteCategory: (state, action) => {
      const { id } = action.payload;
      const categoryIndex = state.categories.findIndex((cat) => cat.id === id);
      state.categories.splice(categoryIndex, 1);
    },
  },
});

export const {
  setActiveCategoryId,
  addCategory,
  updateCategory,
  deleteCategory,
} = categorySlice.actions;

const selectCategories = (state) => state.category;

const selectActiveCommunicator = (state) => {
  const communicators = state.communicator.communicators;
  const activeCommunicatorId = state.communicator.activeCommunicatorId;
  return communicators.filter((com) => com.id === activeCommunicatorId)[0];
};

export const selectAllCategories = createSelector(
  [selectCategories, selectActiveCommunicator],
  (category, communicator) =>
    category.categories.filter((cat) =>
      communicator.categories.includes(cat.id)
    )
);

export const selectActiveCategoryId = createSelector(
  [selectCategories],
  (category) => category.activeCategoryId
);

export const selectPhrases = createSelector(
  selectAllCategories,
  selectActiveCategoryId,
  (categories, activeCategoryId) =>
    categories.filter((cat) => cat.id === activeCategoryId)[0].phrases
);

export default categorySlice.reducer;
