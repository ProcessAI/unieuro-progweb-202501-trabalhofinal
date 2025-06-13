import api from './client-api';

export const listarClientes = async () => {
  const response = await api.get('/cliente');
  return response.data;
};
