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
  Menu,
  MenuItem,
} from '@mui/material';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  const isAuth = useSelector(selectToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profile = useSelector(selectProfile);

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
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
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem
                key={nanoid()}
                onClick={() => {
                  handleCloseNavMenu();
                  navigate('/');
                }}
              >
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
              <MenuItem
                key={nanoid()}
                onClick={() => {
                  handleCloseNavMenu();
                  navigate('contacts');
                }}
              >
                <Typography textAlign="center">Contacts</Typography>
              </MenuItem>
              <MenuItem
                key={nanoid()}
                onClick={() => {
                  isAuth ? dispatch(logoutUserThunk()) : navigate('/login');
                }}
              >
                <Typography textAlign="center">
                  {isAuth ? 'logout' : 'login'}
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

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
