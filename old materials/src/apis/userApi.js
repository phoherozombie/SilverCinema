import baseApi from './baseApi';

export const loginUser = async (email, password, type_account) => {
  const response = await baseApi.post('/login', { email, password, type_account });
  return response.data;
};
