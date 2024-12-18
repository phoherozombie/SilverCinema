const { ShownIn } = require('../models');

// Get all "shown in" records
exports.getAllShownIn = async (req, res) => {
    try {
        const shownInRecords = await ShownIn.findAll();
        res.status(200).json(shownInRecords);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new "shown in" record
exports.createShownIn = async (req, res) => {
    try {
        const shownIn = await ShownIn.create({
            movieId: req.body.movieId,
            theatreId: req.body.theatreId,
            startDate: req.body.startDate,
            endDate: req.body.endDate
        });
        res.status(201).json(shownIn);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a "shown in" record
exports.updateShownIn = async (req, res) => {
    try {
        const updatedRows = await ShownIn.update(req.body, { where: { id: req.params.id } });
        if (updatedRows[0] === 0) {
            return res.status(404).json({ message: 'ShownIn record not found' });
        }
        res.status(200).json({ message: 'ShownIn record updated successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a "shown in" record
exports.deleteShownIn = async (req, res) => {
    try {
        const deletedRows = await ShownIn.destroy({ where: { id: req.params.id } });
        if (deletedRows === 0) {
            return res.status(404).json({ message: 'ShownIn record not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
