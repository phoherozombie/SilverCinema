import { get, post, put, del } from '../baseApi';

//get all shows in
export const getAllShownIn = async () => {
    try {
        const showsIn = await get('/showIn');
        return showsIn;
    } catch (error) {
        console.error('Error fetching shows in:', error);
        throw error;
    }
};

//create a new show in
export const createShownIn = async (showInData) => {
    try {
        const showsIn = await post('/showIn', showInData);
        return showsIn;
    } catch (error) {
        console.error('Error creating show in:', error);
        throw error;
    }
};

//update an existing show in
export const updateShownIn = async (id, showInData) => {
    try {
        const showsIn = await put(`/showIn/${id}`, showInData);
        return showsIn;
    } catch (error) {
        console.error(`Error updating show in with id ${id}:`, error);
        throw error;
    }
};

//delete a show in
export const deleteShownIn = async (id) => {
    try {
        const showsIn = await del(`/showIn/${id}`);
        return showsIn;
    } catch (error) {
        console.error(`Error deleting show in with id ${id}:`, error);
        throw error;
    }
};