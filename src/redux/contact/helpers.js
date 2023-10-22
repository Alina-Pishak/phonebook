export const handleFulfilledGetContacts = (state, { payload }) => {
  state.contacts = payload;
};
export const handleFulfilledCreateContacts = (state, { payload }) => {
  console.log('payload', payload);
  state.contacts = [...state.contacts, payload];
};
export const handleFulfilledDeleteContacts = (state, { payload }) => {
  state.contacts = state.contacts.filter(contact => contact.id !== payload.id);
};
export const handleFulfilledUpdateContact = (state, { payload }) => {
  const contact = state.contacts.find(contact => contact.id === payload.id);
  const index = state.contacts.indexOf(contact);
  state.contacts.splice(index, 1, payload);
};
