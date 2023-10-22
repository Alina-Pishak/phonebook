import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import { selectProfile, selectToken } from 'redux/auth/selectors';
import { logoutUserThunk } from 'redux/auth/thunks';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Avatar,
  Button,
  Tooltip,
} from '@mui/material';
import RecentActorsIcon from '@mui/icons-material/RecentActors';

function Header() {
  const isAuth = useSelector(selectToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profile = useSelector(selectProfile);
  return (
    <AppBar position="static">
      <Container maxWidth="100%">
        <Toolbar disableGutters>
          <RecentActorsIcon
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            onClick={() => navigate('/')}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PHONEBOOK
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              key={nanoid()}
              onClick={() => navigate('/contacts')}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Contacts
            </Button>
            <Button
              key={nanoid()}
              onClick={() => {
                console.log('isAuth', isAuth);
                isAuth ? dispatch(logoutUserThunk()) : navigate('/login');
              }}
              sx={{
                my: 2,
                color: 'white',
                display: 'block',
                marginLeft: 'auto',
              }}
            >
              {isAuth ? 'logout' : 'login'}
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title={isAuth && profile.name}>
              <IconButton sx={{ p: 0 }}>
                <Avatar
                  alt={isAuth && profile.name}
                  src="/static/images/avatar/2.jpg"
                />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
