import { nanoid } from 'nanoid';
import { TYPES } from './types';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

export const deleteContact = id => {
  return {
    type: TYPES.DELETE,
    payload: id,
  };
};
export const addContact = values => {
  return {
    type: TYPES.ADD,
    payload: { ...values, id: nanoid() },
  };
};

export const contactsReducer = (state = initialState.contacts, action) => {
  switch (action.type) {
    case TYPES.DELETE:
      return state.filter(contact => contact.id !== action.payload);
    case TYPES.ADD:
      return [...state, action.payload];
    default:
      return state;
  }
};
