const { MovieGenre } = require('../models');

const getAllMovieGenres = async (req, res) => {
  try {
    const movieGenres = await MovieGenre.findAll();
    res.status(200).json(movieGenres);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createMovieGenre = async (req, res) => {
  try {
    const movieGenre = await MovieGenre.create(req.body);
    res.status(201).json(movieGenre);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateMovieGenre = async (req, res) => {
  try {
    const movieGenre = await MovieGenre.findByPk(req.params.id);
    if (!movieGenre) {
      return res.status(404).json({ message: 'Movie Genre not found' });
    }
    await movieGenre.update(req.body);
    res.status(200).json(movieGenre);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteMovieGenre = async (req, res) => {
  try {
    const movieGenre = await MovieGenre.findByPk(req.params.id);
    if (!movieGenre) {
      return res.status(404).json({ message: 'Movie Genre not found' });
    }
    await movieGenre.destroy();
    res.status(200).json({ message: 'Movie Genre deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllMovieGenres, createMovieGenre, updateMovieGenre, deleteMovieGenre };
