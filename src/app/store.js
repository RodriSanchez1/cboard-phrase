import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import speechReducer from '../features/speech/speechSlice';
import themeReducer from '../features/theme/themeSlice';
import categoryReducer from '../features/category/categorySlice';
import outputReducer from '../features/output/ouputSlice';
import communicatorReducer from '../features/communicator/communicatorSlice';
import { cboardPhraseAPI } from '../services/api';
import userReducer from '../features/user/userSlice';

const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: ['speech'],
};

const speechPersistConfig = {
  key: 'speech',
  storage: storage,
  blacklist: ['voices'],
};

const rootReducer = combineReducers({
  user: userReducer,
  speech: persistReducer(speechPersistConfig, speechReducer),
  theme: themeReducer,
  communicator: communicatorReducer,
  category: categoryReducer,
  output: outputReducer,
  [cboardPhraseAPI.reducerPath]: cboardPhraseAPI.reducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // Redux persist
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(cboardPhraseAPI.middleware),
});

export let persistor = persistStore(store);
