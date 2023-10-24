import { combineReducers } from '@reduxjs/toolkit';
import { reducerContact } from './contact/slice';
import { reducerFilter } from './filter/filterSlice';
import { reducerApp } from './app/slice';
import { reducerAuth } from './auth/slice';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'auth',
  storage,
};

const authPersistedReducer = persistReducer(persistConfig, reducerAuth);

export const reducer = combineReducers({
  auth: authPersistedReducer,
  app: reducerApp,
  contacts: reducerContact,
  filter: reducerFilter,
});
