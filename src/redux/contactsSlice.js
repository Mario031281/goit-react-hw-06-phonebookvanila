import { nanoid } from 'nanoid';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

export const contactsReducer = (state = initialState.contacts, action) => {
  switch (action.type) {
    case 'contacts/delete':
      return state.filter(contact => contact.id !== action.payload);
    case 'contacts/add':
      return [...state, action.payload];
    default:
      return state;
  }
};

export const deleteContact = id => {
  return {
    type: 'contacts/delete',
    payload: id,
  };
};
export const addContact = values => {
  return {
    type: 'contacts/add',
    payload: { ...values, id: nanoid() },
  };
};
