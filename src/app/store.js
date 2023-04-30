import { configureStore } from '@reduxjs/toolkit';
import speechReducer from '../features/speech/speechSlice';
import themeReducer from '../features/theme/themeSlice';
import categoryReducer from '../features/category/categorySlice';
import outputReducer from '../features/output/ouputSlice';

export const store = configureStore({
  reducer: {
    speech: speechReducer,
    theme: themeReducer,
    category: categoryReducer,
    output: outputReducer,
  },
});
