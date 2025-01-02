import { get, post, put, del } from '../baseApi';

//get all payments
export const getAllPayments = async () => {
    try {
        const payments = await get('/payments');
        return payments;
    } catch (error) {
        console.error('Error fetching payments:', error);
        throw error;
    }
};
//create a new payment
export const createPayment = async (paymentData) => {
    try {
        const payments = await post('/payments', paymentData);
        return payments;
    } catch (error) {
        console.error('Error creating payment:', error);
        throw error;
    }
};

//update an existing payment
export const updatePayment = async (id, paymentData) => {
    try {
        const payments = await put(`/payments/${id}`, paymentData);
        return payments;
    } catch (error) {
        console.error(`Error updating payment with id ${id}:`, error);
        throw error;
    }
};

//delete a payment
export const deletePayment = async (id) => {
    try {
        const payments = await del(`/payments/${id}`);
        return payments;
    } catch (error) {
        console.error(`Error deleting payment with id ${id}:`, error);
        throw error;
    }
};