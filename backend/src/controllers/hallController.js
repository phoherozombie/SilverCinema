const { Hall } = require('../models');

// Get all halls
exports.getAllHalls = async (req, res) => {
    try {
        const halls = await Hall.findAll();
        res.status(200).json(halls);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new hall
exports.createHall = async (req, res) => {
    try {
        const hall = await Hall.create({
            name: req.body.name,
            capacity: req.body.capacity,
            location: req.body.location
        });
        res.status(201).json(hall);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a hall
exports.updateHall = async (req, res) => {
    try {
        const updatedRows = await Hall.update(req.body, { where: { id: req.params.id } });
        if (updatedRows[0] === 0) {
            return res.status(404).json({ message: 'Hall not found' });
        }
        res.status(200).json({ message: 'Hall updated successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a hall
exports.deleteHall = async (req, res) => {
    try {
        const deletedRows = await Hall.destroy({ where: { id: req.params.id } });
        if (deletedRows === 0) {
            return res.status(404).json({ message: 'Hall not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
