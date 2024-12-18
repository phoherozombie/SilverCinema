const { HallwiseSeat } = require('../models');

// Get all hallwise seats
exports.getAllHallwiseSeats = async (req, res) => {
    try {
        const hallwiseSeats = await HallwiseSeat.findAll();
        res.status(200).json(hallwiseSeats);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new hallwise seat
exports.createHallwiseSeat = async (req, res) => {
    try {
        const hallwiseSeat = await HallwiseSeat.create({
            hallId: req.body.hallId,
            seatNumber: req.body.seatNumber,
            isAvailable: req.body.isAvailable
        });
        res.status(201).json(hallwiseSeat);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a hallwise seat
exports.updateHallwiseSeat = async (req, res) => {
    try {
        const updatedRows = await HallwiseSeat.update(req.body, { where: { id: req.params.id } });
        if (updatedRows[0] === 0) {
            return res.status(404).json({ message: 'Hallwise seat not found' });
        }
        res.status(200).json({ message: 'Hallwise seat updated successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a hallwise seat
exports.deleteHallwiseSeat = async (req, res) => {
    try {
        const deletedRows = await HallwiseSeat.destroy({ where: { id: req.params.id } });
        if (deletedRows === 0) {
            return res.status(404).json({ message: 'Hallwise seat not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
