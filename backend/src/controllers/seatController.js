const { Seat } = require('../models');

// Get all seats
exports.getAllSeats = async (req, res) => {
    try {
        const seats = await Seat.findAll();
        res.status(200).json(seats);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new seat
exports.createSeat = async (req, res) => {
    try {
        const seat = await Seat.create({
            number: req.body.number,
            hallId: req.body.hallId,
            isAvailable: req.body.isAvailable
        });
        res.status(201).json(seat);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a seat
exports.updateSeat = async (req, res) => {
    try {
        const updatedRows = await Seat.update(req.body, { where: { id: req.params.id } });
        if (updatedRows[0] === 0) {
            return res.status(404).json({ message: 'Seat not found' });
        }
        res.status(200).json({ message: 'Seat updated successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a seat
exports.deleteSeat = async (req, res) => {
    try {
        const deletedRows = await Seat.destroy({ where: { id: req.params.id } });
        if (deletedRows === 0) {
            return res.status(404).json({ message: 'Seat not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
