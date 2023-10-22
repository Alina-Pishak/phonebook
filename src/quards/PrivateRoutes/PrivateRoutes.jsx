import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/selectors';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
  const isAuth = useSelector(selectToken);
  const location = useLocation();
  return isAuth ? children : <Navigate to="/login" state={location} />;
};

export default PrivateRoutes;
