const { MovieDirector } = require('../models');

const getAllMovieDirectors = async (req, res) => {
  try {
    const movieDirectors = await MovieDirector.findAll();
    res.status(200).json(movieDirectors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createMovieDirector = async (req, res) => {
  try {
    const movieDirector = await MovieDirector.create(req.body);
    res.status(201).json(movieDirector);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateMovieDirector = async (req, res) => {
  try {
    const movieDirector = await MovieDirector.findByPk(req.params.id);
    if (!movieDirector) {
      return res.status(404).json({ message: 'Movie Director not found' });
    }
    await movieDirector.update(req.body);
    res.status(200).json(movieDirector);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteMovieDirector = async (req, res) => {
  try {
    const movieDirector = await MovieDirector.findByPk(req.params.id);
    if (!movieDirector) {
      return res.status(404).json({ message: 'Movie Director not found' });
    }
    await movieDirector.destroy();
    res.status(200).json({ message: 'Movie Director deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllMovieDirectors, createMovieDirector, updateMovieDirector, deleteMovieDirector };
