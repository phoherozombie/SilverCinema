import { get, post, put, del } from '../baseApi';

//get all movie genres
export const getAllMovieGenres = async () => {
    try {
        const movieGenres = await get('/movieGenres');
        return movieGenres;
    } catch (error) {
        console.error('Error fetching movie genres:', error);
        throw error;
    }
};


//create a new movie genre
export const createMovieGenre = async (movieGenreData) => {
    try {
        const movieGenres = await post('/movieGenres', movieGenreData);
        return movieGenres;
    } catch (error) {
        console.error('Error fetching movie genres:', error);
        throw error;
    }
};

//update an existing movie genre
export const updateMovieGenre = async (id, movieGenreData) => {
    try {
        const movieGenres = await put(`/movieGenres/${id}`, movieGenreData);
        return movieGenres;
    } catch (error) {
        console.error(`Error updating movie genre with id ${id}:`, error);
        throw error;
    }
};

//delete a movie genre
export const deleteMovieGenre = async (id) => {
    try {
        const movieGenres = await del(`/movieGenres/${id}`);
        return movieGenres;
    } catch (error) {
        console.error(`Error deleting movie genre with id ${id}:`, error);
        throw error;
    }
};
