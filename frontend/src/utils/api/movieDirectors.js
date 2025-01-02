import { get, post, put, del } from '../baseApi';

//get all movie directors
export const getAllMovieDirectors = async () => {
    try {
        const movieDirectors = await get('/movieDirectors');
        return movieDirectors;
    } catch (error) {
        console.error('Error fetching movie directors:', error);
        throw error;
    }
};

//create a new movie director
export const createMovieDirector = async (movieDirectorData) => {
    try {
        const movieDirectors = await post('/movieDirectors', movieDirectorData);
        return movieDirectors;
    } catch (error) {
        console.error('Error fetching movie directors:', error);
        throw error;
    }
};

//update an existing movie director
export const updateMovieDirector = async (id, movieDirectorData) => {
    try {
        const movieDirectors = await put(`/movieDirectors/${id}`, movieDirectorData);
        return movieDirectors;
    } catch (error) {
        console.error(`Error updating movie director with id ${id}:`, error);
        throw error;
    }
};

//delete a movie director
export const deleteMovieDirector = async (id) => {
    try {
        const movieDirectors = await del(`/movieDirectors/${id}`);
        return movieDirectors;
    } catch (error) {
        console.error(`Error deleting movie director with id ${id}:`, error);
        throw error;
    }
};
