import baseApi from './baseApi';

// Fetch all seats for a specific hall
export const getSeatsByHall = async (hallId) => {
  const response = await baseApi.get(`/seats/${hallId}`);
  return response.data;
};

// Create a new seat
export const createSeat = async (seatData) => {
  const response = await baseApi.post('/seats', seatData);
  return response.data;
};

// Update a seat
export const updateSeat = async (id, seatData) => {
  const response = await baseApi.put(`/seats/${id}`, seatData);
  return response.data;
};

// Delete a seat
export const deleteSeat = async (id) => {
  const response = await baseApi.delete(`/seats/${id}`);
  return response.data;
};
