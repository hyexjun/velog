import axios from 'axios';
import { getCookie } from '../shared/Cookie';

const api = axios.create({
  baseURL: 'http://webstudy.shop',
});

api.interceptors.request.use(
  (config) => {
    const accessToken = getCookie('accessToken');
    const refreshToken = getCookie('refreshToken');
    config.headers['Authorization'] = `Bearer ${accessToken}`;
    config.headers['Refresh-token'] = refreshToken;
    return config;
  },
  (error) => {
    console.log(error);
  }
);

const apis = {
  //user
  registerUser: (payload) => api.post('/api/users/signup', payload),
  loginUser: (payload) => api.post('/api/users/login', payload),
  logoutUser: (payload) => api.post('/api/auth/users/logout', payload),
  getMypage: (payload) => api.get('/api/mypage', payload),
};

export default apis;
