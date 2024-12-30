import baseApi from './baseApi';

// Fetch all payments
export const getAllPayments = async () => {
  const response = await baseApi.get('/payments');
  return response.data;
};

// Process a payment
export const processPayment = async (paymentData) => {
  const response = await baseApi.post('/payments', paymentData);
  return response.data;
};

// Fetch payment details
export const getPaymentDetails = async (id) => {
  const response = await baseApi.get(`/payments/${id}`);
  return response.data;
};

// Delete a payment
export const deletePayment = async (id) => {
  const response = await baseApi.delete(`/payments/${id}`);
  return response.data;
};
