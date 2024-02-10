import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Button,
  Snackbar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/selectors';

const HomePage = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const isAuth = useSelector(selectToken);

  const handleClose = () => {
    setOpen(false);
  };

  const createContactBtn = () => {
    isAuth ? navigate('contacts') : setOpen(true);
  };

  const loginBtn = () => {
    isAuth ? setOpen(true) : navigate('/login');
  };

  return (
    <Box
      sx={{
        width: 700,
        marginTop: '100px',
        backgroundColor: 'transperent',
        borderRadius: '15px',
        padding: '40px',
      }}
    >
      <Typography variant="h2" color="#fff">
        Phonebook App
      </Typography>{' '}
      <Typography
        paragraph="true"
        color="#fff"
        sx={{ fontSize: '25px', marginTop: '20px' }}
      >
        Welcome to your Phonebook App. There is you can create a new account(or
        login if you have an account) and save your contacts.
      </Typography>
      <Button
        variant="outlined"
        color="secondary"
        sx={{ marginRight: '10px' }}
        onClick={createContactBtn}
      >
        Create contact
      </Button>
      <Button variant="outlined" color="secondary" onClick={loginBtn}>
        login
      </Button>
      {isAuth ? (
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="You have already login"
          action={
            <>
              <IconButton
                aria-label="close"
                color="inherit"
                sx={{ p: 0.5 }}
                onClick={handleClose}
              >
                <CloseIcon />
              </IconButton>
            </>
          }
        />
      ) : (
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            Create contact
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: theme => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent dividers>
            <Typography gutterBottom>
              You don't have an account. Would you like to create it?
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={() => navigate('/login')}>
              Yes
            </Button>
            <Button autoFocus onClick={handleClose}>
              No
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
};

export default HomePage;
