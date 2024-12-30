import baseApi from './baseApi';

// Fetch all showtimes
export const getAllShowtimes = async () => {
  const response = await baseApi.get('/showtimes');
  return response.data;
};

// Create a showtime
export const createShowtime = async (showtimeData) => {
  const response = await baseApi.post('/showtimes', showtimeData);
  return response.data;
};

// Update a showtime
export const updateShowtime = async (id, showtimeData) => {
  const response = await baseApi.put(`/showtimes/${id}`, showtimeData);
  return response.data;
};

// Delete a showtime
export const deleteShowtime = async (id) => {
  const response = await baseApi.delete(`/showtimes/${id}`);
  return response.data;
};
