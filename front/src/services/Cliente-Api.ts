import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // CONEXÃO COM O BACK-END
  withCredentials: true,
});

export default api;

