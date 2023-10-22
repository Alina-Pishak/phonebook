import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
  authUserThunk,
  createUserThunk,
  getUserInfoThunk,
  logoutUserThunk,
} from './thunks';
import {
  handleFulfilledAuthUser,
  handleFulfilledGetUser,
  handleFulfilledLogoutUser,
} from './helpers';

const slice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(createUserThunk.fulfilled, handleFulfilledAuthUser)
      .addCase(authUserThunk.fulfilled, handleFulfilledAuthUser)
      .addCase(logoutUserThunk.fulfilled, handleFulfilledLogoutUser)
      .addCase(getUserInfoThunk.fulfilled, handleFulfilledGetUser);
  },
});

export const reducerAuth = slice.reducer;
