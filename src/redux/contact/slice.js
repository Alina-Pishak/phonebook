import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
  createContactThunk,
  deleteContactThunk,
  getAllContactsThunk,
  updateContactThunk,
} from './thunks';
import {
  handleFulfilledCreateContacts,
  handleFulfilledDeleteContacts,
  handleFulfilledGetContacts,
  handleFulfilledUpdateContact,
} from './helpers';

const slice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllContactsThunk.fulfilled, handleFulfilledGetContacts)
      .addCase(createContactThunk.fulfilled, handleFulfilledCreateContacts)
      .addCase(deleteContactThunk.fulfilled, handleFulfilledDeleteContacts)
      .addCase(updateContactThunk.fulfilled, handleFulfilledUpdateContact);
  },
});

export const reducerContact = slice.reducer;
export const {
  addContactAction,
  removeContactAction,
  getFilteredContactsAction,
} = slice.actions;
