import baseApi from './baseApi';

export const getAllTickets = async () => {
  const response = await baseApi.get('/tickets');
  return response.data;
};

export const createTicket = async (ticketData) => {
  const response = await baseApi.post('/tickets', ticketData);
  return response.data;
};

export const deleteTicket = async (id) => {
  const response = await baseApi.delete(`/tickets/${id}`);
  return response.data;
};
