import baseApi from './baseApi';

// Fetch all theatres
export const getAllTheatres = async () => {
  const response = await baseApi.get('/theatres');
  return response.data;
};

// Create a new theatre
export const createTheatre = async (theatreData) => {
  const response = await baseApi.post('/theatres', theatreData);
  return response.data;
};

// Update a theatre
export const updateTheatre = async (id, theatreData) => {
  const response = await baseApi.put(`/theatres/${id}`, theatreData);
  return response.data;
};

// Delete a theatre
export const deleteTheatre = async (id) => {
  const response = await baseApi.delete(`/theatres/${id}`);
  return response.data;
};
