import baseApi from './baseApi';

// Fetch all movie genres
export const getAllMovieGenres = async () => {
  const response = await baseApi.get('/movie-genres');
  return response.data;
};

// Create a new movie genre
export const createMovieGenre = async (genreData) => {
  const response = await baseApi.post('/movie-genres', genreData);
  return response.data;
};

// Update a movie genre
export const updateMovieGenre = async (id, genreData) => {
  const response = await baseApi.put(`/movie-genres/${id}`, genreData);
  return response.data;
};

// Delete a movie genre
export const deleteMovieGenre = async (id) => {
  const response = await baseApi.delete(`/movie-genres/${id}`);
  return response.data;
};
