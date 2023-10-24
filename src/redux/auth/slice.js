import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
  authUserThunk,
  createUserThunk,
  logoutUserThunk,
  refreshThunk,
} from './thunks';
import { handleFulfilledAuthUser, handleFulfilledLogoutUser } from './helpers';

const slice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(createUserThunk.fulfilled, handleFulfilledAuthUser)
      .addCase(authUserThunk.fulfilled, handleFulfilledAuthUser)
      .addCase(refreshThunk.fulfilled, handleFulfilledAuthUser)
      .addCase(logoutUserThunk.fulfilled, handleFulfilledLogoutUser);
  },
});

export const reducerAuth = slice.reducer;
