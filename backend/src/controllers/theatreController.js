const { Theatre } = require('../models');

// Get all theatres
exports.getAllTheatres = async (req, res) => {
    try {
        const theatres = await Theatre.findAll();
        res.status(200).json(theatres);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new theatre
exports.createTheatre = async (req, res) => {
    try {
        const theatre = await Theatre.create({
            name: req.body.name,
            location: req.body.location,
            capacity: req.body.capacity
        });
        res.status(201).json(theatre);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a theatre
exports.updateTheatre = async (req, res) => {
    try {
        const updatedRows = await Theatre.update(req.body, { where: { id: req.params.id } });
        if (updatedRows[0] === 0) {
            return res.status(404).json({ message: 'Theatre not found' });
        }
        res.status(200).json({ message: 'Theatre updated successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a theatre
exports.deleteTheatre = async (req, res) => {
    try {
        const deletedRows = await Theatre.destroy({ where: { id: req.params.id } });
        if (deletedRows === 0) {
            return res.status(404).json({ message: 'Theatre not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
