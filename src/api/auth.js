import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const setToken = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const createUser = async data => {
  const resp = (await axios.post('/users/signup', data)).data;
  setToken(resp.token);
  return resp;
};

export const authUser = async data => {
  const resp = (await axios.post('/users/login', data)).data;
  setToken(resp.token);
  return resp;
};

export const logoutUser = async () => {
  return (await axios.post('/users/logout')).data;
};

export const refresh = async () => {
  const token = JSON.parse(localStorage.getItem('persist:auth'));
  if (!token) return;
  setToken(JSON.parse(token?.token));
  return { token: JSON.parse(token?.token), user: JSON.parse(token?.user) };
};
