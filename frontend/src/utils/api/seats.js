import { get, post, put, del } from '../baseApi';

//fetch all seats
export const getAllSeats = async () => {
    try {
        const seats = await get('/seats');
        return seats;
    } catch (error) {
        console.error('Error fetching seats:', error);
        throw error;
    }
};

//create a new seat
export const createSeat = async (seatData) => {
    try {
        const seats = await post('/seats', seatData);
        return seats;
    } catch (error) {
        console.error('Error creating seat:', error);
        throw error;
    }
}; 

//update an existing seat
export const updateSeat = async (id, seatData) => {
    try {
        const seats = await put(`/seats/${id}`, seatData);
        return seats;
    } catch (error) {
        console.error(`Error updating seat with id ${id}:`, error);
        throw error;
    }
};

//delete a seat
export const deleteSeat = async (id) => {
    try {
        const seats = await del(`/seats/${id}`);
        return seats;
    } catch (error) {
        console.error(`Error deleting seat with id ${id}:`, error);
        throw error;
    }
};