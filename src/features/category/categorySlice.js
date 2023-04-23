import { createSlice } from '@reduxjs/toolkit';

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
  },
});

export const { setActiveCategoryId, addCategory } = categorySlice.actions;

export default categorySlice.reducer;
