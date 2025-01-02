import { get, post, put, del } from '../baseApi';

//get all tickets
export const getAllTickets = async () => {
    try {
        const tickets = await get('/tickets');
        return tickets;
    } catch (error) {
        console.error('Error fetching tickets:', error);
        throw error;
    }
};  

//create a new ticket
export const createTicket = async (ticketData) => {
    try {
        const tickets = await post('/tickets', ticketData);
        return tickets;
    } catch (error) {
        console.error('Error creating ticket:', error);
        throw error;
    }
}; 

//update an existing ticket
export const updateTicket = async (id, ticketData) => {
    try {
        const tickets = await put(`/tickets/${id}`, ticketData);
        return tickets;
    } catch (error) {
        console.error(`Error updating ticket with id ${id}:`, error);
        throw error;
    }
};  

//delete a ticket
export const deleteTicket = async (id) => {
    try {
        const tickets = await del(`/tickets/${id}`);
        return tickets;
    } catch (error) {
        console.error(`Error deleting ticket with id ${id}:`, error);
        throw error;
    }
};  