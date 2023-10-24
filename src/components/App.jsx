import Layout from 'Layout/Layout';
import PrivateRoutes from 'quards/PrivateRoutes/PrivateRoutes';
import PublicRoutes from 'quards/PublicRoutes/PublicRoutes';
import { Route, Routes } from 'react-router-dom';
import { Backdrop, CircularProgress, ThemeProvider } from '@mui/material';
import { Loader } from './Loader/Loader';
import { theme } from 'theme/theme';
import Error from './Error/Error';
import { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshThunk } from 'redux/auth/thunks';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return (
    <ThemeProvider theme={theme}>
      <Error />
      <Loader />
      <Suspense
        fallback={
          <Backdrop
            sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
            open={true}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        }
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="contacts"
              element={
                <PrivateRoutes>
                  <ContactsPage />
                </PrivateRoutes>
              }
            />
          </Route>
          <Route
            path="/register"
            element={
              <PublicRoutes>
                <RegisterPage />
              </PublicRoutes>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoutes>
                <LoginPage />
              </PublicRoutes>
            }
          />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
