import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createContact,
  deleteContact,
  getAllContacts,
  updateContact,
} from 'api/contacts';

export const getAllContactsThunk = createAsyncThunk('contacts/fetchAll', () =>
  getAllContacts()
);

export const createContactThunk = createAsyncThunk(
  'contacts/addContact',
  data => createContact(data)
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  id => deleteContact(id)
);

export const updateContactThunk = createAsyncThunk(
  'contacts/updateContact',
  newData => updateContact(newData)
);
