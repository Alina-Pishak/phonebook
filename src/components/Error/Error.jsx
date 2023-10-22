import { Alert } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectAppState } from 'redux/app/selectors';

const Error = () => {
  const { error } = useSelector(selectAppState);
  return (
    error && (
      <Alert severity="error">
        Oooops! Something went wrong... Try again later
      </Alert>
    )
  );
};

export default Error;
