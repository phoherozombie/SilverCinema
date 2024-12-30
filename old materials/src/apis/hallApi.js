import baseApi from './baseApi';

// Fetch all halls
export const getAllHalls = async () => {
  const response = await baseApi.get('/halls');
  return response.data;
};

// Create a hall
export const createHall = async (hallData) => {
  const response = await baseApi.post('/halls', hallData);
  return response.data;
};

// Update a hall
export const updateHall = async (id, hallData) => {
  const response = await baseApi.put(`/halls/${id}`, hallData);
  return response.data;
};

// Delete a hall
export const deleteHall = async (id) => {
  const response = await baseApi.delete(`/halls/${id}`);
  return response.data;
};
