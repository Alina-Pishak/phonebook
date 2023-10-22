import { createAsyncThunk } from '@reduxjs/toolkit';
import { authUser, createUser, getUserInfo, logoutUser } from 'api/auth';

export const createUserThunk = createAsyncThunk('auth/createUser', data =>
  createUser(data)
);

export const authUserThunk = createAsyncThunk('auth/authUser', data =>
  authUser(data)
);

export const logoutUserThunk = createAsyncThunk('auth/logoutUser', () =>
  logoutUser()
);

export const getUserInfoThunk = createAsyncThunk('auth/getUser', () =>
  getUserInfo()
);
