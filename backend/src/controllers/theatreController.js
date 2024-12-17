const { Theatre } = require('../models');

const getAllTheatres = async (req, res) => {
  try {
    const theatres = await Theatre.findAll();
    res.status(200).json(theatres);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createTheatre = async (req, res) => {
  try {
    const theatre = await Theatre.create(req.body);
    res.status(201).json(theatre);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateTheatre = async (req, res) => {
  try {
    const theatre = await Theatre.findByPk(req.params.id);
    if (!theatre) {
      return res.status(404).json({ message: 'Theatre not found' });
    }
    await theatre.update(req.body);
    res.status(200).json(theatre);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteTheatre = async (req, res) => {
  try {
    const theatre = await Theatre.findByPk(req.params.id);
    if (!theatre) {
      return res.status(404).json({ message: 'Theatre not found' });
    }
    await theatre.destroy();
    res.status(200).json({ message: 'Theatre deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllTheatres, createTheatre, updateTheatre, deleteTheatre };
