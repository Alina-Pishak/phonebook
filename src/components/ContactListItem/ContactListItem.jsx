import { useDispatch } from 'react-redux';
import { deleteContactThunk, updateContactThunk } from 'redux/contact/thunks';
import {
  Avatar,
  Box,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
} from '@mui/material';
import CheckCircleOutlineTwoToneIcon from '@mui/icons-material/CheckCircleOutlineTwoTone';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';

const ContactListItem = ({ contacts }) => {
  const [contactEditing, setContactEditing] = useState(null);
  const dispatch = useDispatch();
  return contacts.map(({ id, name, number }) => {
    return contactEditing === id ? (
      <ListItem
        key={id}
        sx={{
          height: '72px',
          bgcolor: '#f7faff',
          borderRadius: '15px',
          mb: '10px',
        }}
        secondaryAction={
          <Box
            sx={{
              display: 'flex',
              gap: '10px',
            }}
          >
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => setContactEditing(null)}
            >
              <ClearIcon />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => dispatch(deleteContactThunk(id))}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        }
      >
        <ListItemAvatar>
          <Avatar>{name[0]}</Avatar>
        </ListItemAvatar>
        <Box
          component="form"
          onSubmit={evt => {
            evt.preventDefault();
            const { contactName, contactNumber } = evt.target.elements;
            const newData = {
              id,
              name: contactName.value,
              number: contactNumber.value,
            };
            dispatch(updateContactThunk(newData));
            setContactEditing(null);
          }}
          noValidate
          sx={{ mt: 1, display: 'flex', maxWidth: '300px', gap: '10px' }}
        >
          <TextField
            name="contactName"
            defaultValue={name}
            id="standard-basic"
            variant="standard"
          />{' '}
          <TextField
            name="contactNumber"
            defaultValue={number}
            id="standard-basic"
            variant="standard"
          />
          <IconButton aria-label="done" color="success" type="submit">
            <CheckCircleOutlineTwoToneIcon />
          </IconButton>
        </Box>
      </ListItem>
    ) : (
      <ListItem
        key={id}
        sx={{ bgcolor: '#f7faff', borderRadius: '15px', mb: '10px' }}
        secondaryAction={
          <Box sx={{ display: 'flex', gap: '10px' }}>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => setContactEditing(id)}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => dispatch(deleteContactThunk(id))}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        }
      >
        <ListItemAvatar>
          <Avatar>{name[0]}</Avatar>
        </ListItemAvatar>
        <ListItemText primary={name} secondary={number} />
      </ListItem>
    );
  });
};

export default ContactListItem;
