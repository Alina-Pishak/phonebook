import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const setToken = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const deleteToken = () => {
  delete axios.defaults.headers.common['Authorization'];
};

export const createUser = async data => {
  return (await axios.post('/users/signup', data)).data;
};

export const authUser = async data => {
  const resp = (await axios.post('/users/login', data)).data;
  setToken(resp.token);
  return resp;
};

export const logoutUser = async () => {
  return (await axios.post('/users/logout')).data;
  // deleteToken();
};

export const getUserInfo = async () => {
  return (await axios.get('/users/current')).data;
};
