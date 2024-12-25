import baseApi from './baseApi';

export const getAllMovies = async () => {
  const response = await baseApi.get('/movies');
  return response.data;
};

export const createMovie = async (movieData, imageFile) => {
  const formData = new FormData();
  for (const key in movieData) {
    formData.append(key, movieData[key]);
  }
  if (imageFile) formData.append('image', imageFile);

  const response = await baseApi.post('/movies', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data;
};

export const deleteMovie = async (id) => {
  const response = await baseApi.delete(`/movies/${id}`);
  return response.data;
};
