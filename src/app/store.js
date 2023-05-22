import { configureStore, combineReducers } from '@reduxjs/toolkit';
import speechReducer from '../features/speech/speechSlice';
import themeReducer from '../features/theme/themeSlice';
import categoryReducer from '../features/category/categorySlice';
import outputReducer from '../features/output/ouputSlice';
import communicatorReducer from '../features/communicator/communicatorSlice';
import { cboardPhraseAPI } from '../services/api';

const rootReducer = combineReducers({
  speech: speechReducer,
  theme: themeReducer,
  communicator: communicatorReducer,
  category: categoryReducer,
  output: outputReducer,
  [cboardPhraseAPI.reducerPath]: cboardPhraseAPI.reducer,
});

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
      getDefaultMiddleware().concat(cboardPhraseAPI.middleware),
    preloadedState,
  });
};
