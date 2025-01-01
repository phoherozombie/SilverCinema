import { get, post, put, del } from '../baseApi';

// Fetch all theatres
export const fetchTheatres = async () => {
  try {
    const theatres = await get('/theatres');
    return theatres;
  } catch (error) {
    console.error('Error fetching theatres:', error);
    throw error;
  }
};

// Fetch a single theatre by its ID
export const fetchTheatreById = async (id) => {
  try {
    const theatre = await get(`/theatres/${id}`);
    return theatre;
  } catch (error) {
    console.error(`Error fetching theatre with id ${id}:`, error);
    throw error;
  }
};

// Create a new theatre
export const createTheatre = async (theatreData) => {
  try {
    const newTheatre = await post('/theatres', theatreData);
    return newTheatre;
  } catch (error) {
    console.error('Error creating theatre:', error);
    throw error;
  }
};

// Update an existing theatre
export const updateTheatre = async (id, theatreData) => {
  try {
    const updatedTheatre = await put(`/theatres/${id}`, theatreData);
    return updatedTheatre;
  } catch (error) {
    console.error(`Error updating theatre with id ${id}:`, error);
    throw error;
  }
};

// Delete a theatre
export const deleteTheatre = async (id) => {
  try {
    await del(`/theatres/${id}`);
    return `Theatre with id ${id} deleted successfully`;
  } catch (error) {
    console.error(`Error deleting theatre with id ${id}:`, error);
    throw error;
  }
};
