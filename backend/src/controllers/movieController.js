const { Movie } = require('../models');
const path = require('path');

// Get all movies
exports.getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.findAll();
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve movies', error: error.message });
    }
};

exports.getMovieById = async (req, res) => {
    try {
        const movie = await Movie.findByPk(req.params.id);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.status(200).json(movie);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve movies', error: error.message });
    }
};

// Create a new movie
exports.createMovie = async (req, res) => {
    try {
        const { name, synopsis, release_date, duration, top_cast, language, rating } = req.body;
        const imagePath = req.file ? path.relative(process.cwd(), req.file.path) : null;

        if (!name || !synopsis || !release_date || !duration || !top_cast) {
            return res.status(400).json({ message: 'All fields (name, synopsis, release_date, duration, language, rating) are required' });
        }

        const movie = await Movie.create({
            name,
            synopsis,
            release_date,
            duration,
            top_cast,
            language,
            rating,
            image_path: imagePath,
        });

        res.status(201).json({ message: 'Movie created successfully', movie });
    } catch (error) {
        res.status(400).json({ message: 'Failed to create movie', error: error.message });
    }
};

// Update a movie
exports.updateMovie = async (req, res) => {
    try {
        const { name, synopsis, release_date, duration, top_cast, language, rating } = req.body;
        const imagePath = req.file ? req.file.path : null;

        // Find existing movie
        const movie = await Movie.findByPk(req.params.id);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }

        // Update fields
        movie.name = name || movie.name;
        movie.synopsis = synopsis || movie.synopsis;
        movie.release_date = release_date || movie.release_date;
        movie.duration = duration || movie.duration;
        movie.top_cast = top_cast || movie.top_cast;
        movie.language = language || movie.language;
        movie.rating = rating || movie.rating;

        if (imagePath) {
            movie.image_path = imagePath;
        }

        await movie.save();

        res.status(200).json({ message: 'Movie updated successfully', movie });
    } catch (error) {
        res.status(400).json({ message: 'Failed to update movie', error: error.message });
    }
};

// Delete a movie
exports.deleteMovie = async (req, res) => {
    try {
        const deletedRows = await Movie.destroy({ where: { id: req.params.id } });
        if (deletedRows === 0) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete movie', error: error.message });
    }
};
