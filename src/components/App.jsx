import Layout from 'Layout/Layout';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import PrivateRoutes from 'quards/PrivateRoutes/PrivateRoutes';
import PublicRoutes from 'quards/PublicRoutes/PublicRoutes';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import HomePage from 'pages/HomePage/HomePage';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import { Loader } from './Loader/Loader';
import { theme } from 'theme/theme';
import Error from './Error/Error';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Error />
      <Loader />
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
    </ThemeProvider>
  );
};

export default App;
