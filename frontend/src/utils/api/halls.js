import { get, post, put, del } from '../baseApi';

//fetch all halls
export const getAllHalls = async () => {
    try {
        const halls = await get('/halls');
        return halls;
    } catch (error) {
        console.error('Error fetching halls:', error);
        throw error;
    }
};

//create a new hall
export const createHall = async (hallData) => {
    try {
        const newHall = await post('/halls', hallData);
        return newHall;
    } catch (error) {
        console.error('Error creating hall:', error);
        throw error;
    }
};

//update an existing hall
export const updateHall = async (id, hallData) => {
    try {
        const updatedHall = await put(`/halls/${id}`, hallData);
        return updatedHall;
    } catch (error) {
        console.error(`Error updating hall with id ${id}:`, error);
        throw error;
    }
};  

//delete a hall
export const deleteHall = async (id) => {
    try {
        await del(`/halls/${id}`);
        return `Hall with id ${id} deleted successfully`;
    } catch (error) {
        console.error(`Error deleting hall with id ${id}:`, error);
        throw error;
    }
};  


