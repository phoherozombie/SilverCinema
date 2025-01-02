import { get, post, put, del } from '../baseApi';

//get all users
export const getAllUsers = async () => {
    try {
        const users = await get('/users');
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}; 
// get user by id
export const getUserById = async (id) => {
    try {
        const user = await get(`/users/${id}`);
        return user;
    } catch (error) {
        console.error(`Error fetching user with id ${id}:`, error);
        throw error;
    }
};  
//create a new user
export const createUser = async (userData) => {
    try {
        const user = await post('/users', userData);
        return user;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};  
// update an existing user
export const updateUser = async (id, userData) => {
    try {
        const user = await put(`/users/${id}`, userData);
        return user;
    } catch (error) {
        console.error(`Error updating user with id ${id}:`, error);
        throw error;
    }
};  
//delete a user
export const deleteUser = async (id) => {
    try {
        const user = await del(`/users/${id}`);
        return user;
    } catch (error) {
        console.error(`Error deleting user with id ${id}:`, error);
        throw error;
    }
};