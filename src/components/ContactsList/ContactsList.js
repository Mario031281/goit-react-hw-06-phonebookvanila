import { useDispatch, useSelector } from 'react-redux';
import {
  ContactListContainer,
  Item,
  List,
  Button,
} from './ContactsList.styled';
import { deleteContact } from 'redux/contactsSlice';

export const ContactsList = () => {
  const contacts = useSelector(state => state.contacts);
  const searchQuery = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();
  const filteredContacts = contacts.filter(contact => {
    const name = contact.name || '';
    const query = searchQuery || '';

    return name.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div>
      <ContactListContainer>
        {filteredContacts.map(({ id, name, number }) => (
          <List key={id}>
            <Item>{name}</Item>
            <Item>{number}</Item>
            <Button onClick={() => dispatch(deleteContact(id))}>Delete</Button>
          </List>
        ))}
      </ContactListContainer>
    </div>
  );
};
