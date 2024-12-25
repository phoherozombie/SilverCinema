import baseApi from './baseApi';

// Fetch all movie directors
export const getAllMovieDirectors = async () => {
  const response = await baseApi.get('/movie-directors');
  return response.data;
};

// Create a new movie director
export const createMovieDirector = async (directorData) => {
  const response = await baseApi.post('/movie-directors', directorData);
  return response.data;
};

// Update a movie director
export const updateMovieDirector = async (id, directorData) => {
  const response = await baseApi.put(`/movie-directors/${id}`, directorData);
  return response.data;
};

// Delete a movie director
export const deleteMovieDirector = async (id) => {
  const response = await baseApi.delete(`/movie-directors/${id}`);
  return response.data;
};
