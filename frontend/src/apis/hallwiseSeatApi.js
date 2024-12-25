import baseApi from './baseApi';

// Fetch all hallwise seats
export const getAllHallwiseSeats = async () => {
  const response = await baseApi.get('/hallwise-seats');
  return response.data;
};

// Create a new hallwise seat
export const createHallwiseSeat = async (seatData) => {
  const response = await baseApi.post('/hallwise-seats', seatData);
  return response.data;
};

// Update a hallwise seat
export const updateHallwiseSeat = async (id, seatData) => {
  const response = await baseApi.put(`/hallwise-seats/${id}`, seatData);
  return response.data;
};

// Delete a hallwise seat
export const deleteHallwiseSeat = async (id) => {
  const response = await baseApi.delete(`/hallwise-seats/${id}`);
  return response.data;
};
