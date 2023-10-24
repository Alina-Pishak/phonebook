import { createAsyncThunk } from '@reduxjs/toolkit';
import { authUser, createUser, logoutUser, refresh } from 'api/auth';

export const createUserThunk = createAsyncThunk('auth/createUser', data =>
  createUser(data)
);

export const authUserThunk = createAsyncThunk('auth/authUser', data =>
  authUser(data)
);

export const logoutUserThunk = createAsyncThunk('auth/logoutUser', () =>
  logoutUser()
);

export const refreshThunk = createAsyncThunk('auth/refresh', () => refresh());
