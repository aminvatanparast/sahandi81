import createFilter from 'redux-persist-transform-filter';
import { configureStore } from '@reduxjs/toolkit';
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
import { hashedPersistStorage } from '../utils/hashedPersistStorage.js';

import rootReducer from './root.reducer';

const savePaymentInfo = createFilter('payment', ['info']);

const persistConfig = {
  key: `root${process.env.REACT_APP_PERSIST_HASHING === 'true' ? ':hashed' : ''}`,
  storage: hashedPersistStorage,
  blacklist: ['layout'],
  transforms: [savePaymentInfo],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        ignoredPaths: ['layout'],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
