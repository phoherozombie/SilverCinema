import { get, post, put, del } from '../baseApi';

//get all movies
export const getAllMovies = async () => {
    try {
        const movies = await get('/movies');
        return movies;
    } catch (error) {
        console.error('Error fetching movies:', error);
        throw error;
    }
};

//fetch a single movie by id
export const getMovieById = async (id) => {
    try {
        const movie = await get(`/movies/${id}`);
        return movie;
    } catch (error) {
        console.error(`Error fetching movie with id ${id}:`, error);
        throw error;
    }
}; 

//create a new movie
export const createMovie = async (movieData) => {
    try {
        const movies = await post('/movies', movieData);
        return movies;
    } catch (error) {
        console.error('Error creating movie:', error);
        throw error;
    }
};

//update an existing movie
export const updateMovie = async (id, movieData) => {
    try {
        const movies = await put(`/movies/${id}`, movieData);
        return movies;
    } catch (error) {
        console.error(`Error updating movie with id ${id}:`, error);
        throw error;
    }
};

//delete a movie
export const deleteMovie = async (id) => {
    try {
        const movies = await del(`/movies/${id}`);
        return movies;
    } catch (error) {
        console.error(`Error deleting movie with id ${id}:`, error);
        throw error;
    }
};