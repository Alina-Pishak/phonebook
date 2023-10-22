import { combineReducers } from '@reduxjs/toolkit';
import { reducerContact } from './contact/slice';
import { reducerFilter } from './filter/filterSlice';
import { reducerApp } from './app/slice';
import { reducerAuth } from './auth/slice';

export const reducer = combineReducers({
  contacts: reducerContact,
  filter: reducerFilter,
  app: reducerApp,
  auth: reducerAuth,
});
