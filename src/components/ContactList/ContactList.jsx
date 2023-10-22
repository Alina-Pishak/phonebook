import { List, Typography } from '@mui/material';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { filteredContacts } from 'redux/contact/selectors';

const ContactList = () => {
  const contacts = useSelector(filteredContacts);
  return contacts.length > 0 ? (
    <List>
      <ContactListItem contacts={contacts} />
    </List>
  ) : (
    <Typography component="p" align="center">
      Your contact list is empty
    </Typography>
  );
};

export default ContactList;
