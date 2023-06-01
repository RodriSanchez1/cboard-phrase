import { createSlice, createSelector } from '@reduxjs/toolkit';

import { DEFAULT_CATEGORIES } from './category.constants';

import { selectActiveCommunicator } from '../communicator/communicatorSlice';

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
    updateCategories: (state, action) => {
      const newCategories = action.payload;
      const activeCategoryExists = newCategories.find(
        (cat) => cat.id === state.activeCategoryId
      );
      if (!activeCategoryExists)
        state.activeCategoryId = newCategories[0]?.id || '';
      state.categories = newCategories;
    },
  },
  extraReducers: (builder) => {
    builder.addCase('user/login', (state, action) => {
      const { categories } = action.payload;
      if (!categories.length) return;
      for (const category of categories) {
        state.categories.push(category);
      }
      state.activeCategoryId = categories[0].id;
    });
    builder.addCase('user/logout', () => initialState);
  },
});

export const {
  setActiveCategoryId,
  addCategory,
  updateCategory,
  deleteCategory,
  updateCategories,
} = categorySlice.actions;

const selectCategories = (state) => state.category;

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
