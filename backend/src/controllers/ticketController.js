const { Ticket } = require('../models');

// Get all tickets
exports.getAllTickets = async (req, res) => {
    try {
        const tickets = await Ticket.findAll();
        res.status(200).json(tickets);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new ticket
exports.createTicket = async (req, res) => {
    try {
        const ticket = await Ticket.create({
            userId: req.body.userId,
            showtimeId: req.body.showtimeId,
            seatNumber: req.body.seatNumber,
            price: req.body.price
        });
        res.status(201).json(ticket);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a ticket
exports.updateTicket = async (req, res) => {
    try {
        const updatedRows = await Ticket.update(req.body, { where: { id: req.params.id } });
        if (updatedRows[0] === 0) {
            return res.status(404).json({ message: 'Ticket not found' });
        }
        res.status(200).json({ message: 'Ticket updated successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a ticket
exports.deleteTicket = async (req, res) => {
    try {
        const deletedRows = await Ticket.destroy({ where: { id: req.params.id } });
        if (deletedRows === 0) {
            return res.status(404).json({ message: 'Ticket not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
