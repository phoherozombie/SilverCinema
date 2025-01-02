import { get, post, put, del } from '../baseApi';
// get all showtimes
export const getAllShowtimes = async () => {
    try {
      const data = await get('/showtime');  // Call the getAllShowtimes API endpoint
      return data;  // Return response data (e.g., an array of showtimes)
    } catch (error) {
      console.error('Failed to get showtimes', error);
      throw error;  // Propagate the error for further handling
    }
  };
  
  // create a new showtime
  export const createShowtime = async (showtimeData) => {
    try {
      const data = await post('/showtime', showtimeData);  // Call the createShowtime API endpoint
      return data;  // Return response data (e.g., the newly created showtime)
    } catch (error) {
      console.error('Failed to create showtime', error);
      throw error;  // Propagate the error for further handling
    }
  }; 
  
  // update an existing showtime
  export const updateShowtime = async (id, showtimeData) => {
    try {
      const data = await put(`/showtime/${id}`, showtimeData);  // Call the updateShowtime API endpoint
      return data;  // Return response data (e.g., the updated showtime)
    } catch (error) {
      console.error(`Failed to update showtime with id ${id}`, error);
      throw error;  // Propagate the error for further handling
    }
  };   
  
  // delete a showtime
  export const deleteShowtime = async (id) => {
    try {
      const data = await del(`/showtime/${id}`);  // Call the deleteShowtime API endpoint
      return data;  // Return response data (e.g., a success message)
    } catch (error) {
      console.error(`Failed to delete showtime with id ${id}`, error);
      throw error;  // Propagate the error for further handling
    }
  };   