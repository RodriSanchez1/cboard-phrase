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
      const { id, name } = action.payload;
      const category = state.categories.find((cat) => cat.id === id);
      category.name = name;
    },
  },
});

export const { setActiveCategoryId, addCategory, updateCategory } =
  categorySlice.actions;

const selectCategories = (state) => state.category;

export const selectAllCategories = createSelector(
  [selectCategories],
  (category) => category.categories
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
