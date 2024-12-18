const { Showtime } = require('../models');

// Get all showtimes
exports.getAllShowtimes = async (req, res) => {
    try {
        const showtimes = await Showtime.findAll();
        res.status(200).json(showtimes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new showtime
exports.createShowtime = async (req, res) => {
    try {
        const showtime = await Showtime.create({
            movieId: req.body.movieId,
            hallId: req.body.hallId,
            startTime: req.body.startTime,
            endTime: req.body.endTime
        });
        res.status(201).json(showtime);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a showtime
exports.updateShowtime = async (req, res) => {
    try {
        const updatedRows = await Showtime.update(req.body, { where: { id: req.params.id } });
        if (updatedRows[0] === 0) {
            return res.status(404).json({ message: 'Showtime not found' });
        }
        res.status(200).json({ message: 'Showtime updated successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a showtime
exports.deleteShowtime = async (req, res) => {
    try {
        const deletedRows = await Showtime.destroy({ where: { id: req.params.id } });
        if (deletedRows === 0) {
            return res.status(404).json({ message: 'Showtime not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
