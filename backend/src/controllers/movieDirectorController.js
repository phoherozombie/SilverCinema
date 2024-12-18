const { MovieDirector } = require('../models');

// Get all movie directors
exports.getAllMovieDirectors = async (req, res) => {
    try {
        const movieDirectors = await MovieDirector.findAll();
        res.status(200).json(movieDirectors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new movie director
exports.createMovieDirector = async (req, res) => {
    try {
        const movieDirector = await MovieDirector.create({
            name: req.body.name,
            bio: req.body.bio
        });
        res.status(201).json(movieDirector);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a movie director
exports.updateMovieDirector = async (req, res) => {
    try {
        const updatedRows = await MovieDirector.update(req.body, { where: { id: req.params.id } });
        if (updatedRows[0] === 0) {
            return res.status(404).json({ message: 'Movie director not found' });
        }
        res.status(200).json({ message: 'Movie director updated successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a movie director
exports.deleteMovieDirector = async (req, res) => {
    try {
        const deletedRows = await MovieDirector.destroy({ where: { id: req.params.id } });
        if (deletedRows === 0) {
            return res.status(404).json({ message: 'Movie director not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
