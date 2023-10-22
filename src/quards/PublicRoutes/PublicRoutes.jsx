import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectToken } from 'redux/auth/selectors';

const PublicRoutes = ({ children }) => {
  const isAuth = useSelector(selectToken);
  const location = useLocation();
  return isAuth ? <Navigate to={location.state || '/'} /> : children;
};

export default PublicRoutes;
