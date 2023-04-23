import { configureStore } from '@reduxjs/toolkit';
import speechReducer from '../features/speech/speechSlice';
import themeReducer from '../features/theme/themeSlice';
import categoryReducer from '../features/category/categorySlice';

export const store = configureStore({
  reducer: {
    speech: speechReducer,
    theme: themeReducer,
    category: categoryReducer,
  },
});
