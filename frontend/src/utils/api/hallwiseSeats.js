import { get, post, put, del } from '../baseApi';

//get all hallwise seats
export const getAllHallwiseSeats = async () => {
    try {
        const halls = await get('/hallwiseSeats');
        return halls;
    } catch (error) {
        console.error('Error fetching halls:', error);
        throw error;
    }
};

//create a new hallwise seat
export const createHallwiseSeat = async (hallwiseSeatData) => {
    try {
        const halls = await post('/hallwiseSeats', hallwiseSeatData);
        return halls;
    } catch (error) {
        console.error('Error fetching halls:', error);
        throw error;
    }
};

//update an existing hallwise seat
export const updateHallwiseSeat = async (id, hallwiseSeatData) => {
    try {
        const halls = await put(`/hallwiseSeats/${id}`, hallwiseSeatData);
        return halls;
    } catch (error) {
        console.error('Error fetching halls:', error);
        throw error;
    }
};

//delete a hallwise seat
export const deleteHallwiseSeat = async (id) => {
    try {
        const halls = await del(`/hallwiseSeats/${id}`);
        return halls;
    } catch (error) {
        console.error('Error fetching halls:', error);
        throw error;
    }
};

