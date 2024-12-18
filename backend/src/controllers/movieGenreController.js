const { MovieGenre } = require('../models');

// Get all movie genres
exports.getAllMovieGenres = async (req, res) => {
    try {
        const movieGenres = await MovieGenre.findAll();
        res.status(200).json(movieGenres);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new movie genre
exports.createMovieGenre = async (req, res) => {
    try {
        const movieGenre = await MovieGenre.create({
            name: req.body.name,
            description: req.body.description
        });
        res.status(201).json(movieGenre);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a movie genre
exports.updateMovieGenre = async (req, res) => {
    try {
        const updatedRows = await MovieGenre.update(req.body, { where: { id: req.params.id } });
        if (updatedRows[0] === 0) {
            return res.status(404).json({ message: 'Movie genre not found' });
        }
        res.status(200).json({ message: 'Movie genre updated successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a movie genre
exports.deleteMovieGenre = async (req, res) => {
    try {
        const deletedRows = await MovieGenre.destroy({ where: { id: req.params.id } });
        if (deletedRows === 0) {
            return res.status(404).json({ message: 'Movie genre not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
