const { Showtime } = require('../models');

const getAllShowtimes = async (req, res) => {
  try {
    const showtimes = await Showtime.findAll();
    res.status(200).json(showtimes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createShowtime = async (req, res) => {
  try {
    const showtime = await Showtime.create(req.body);
    res.status(201).json(showtime);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateShowtime = async (req, res) => {
  try {
    const showtime = await Showtime.findByPk(req.params.id);
    if (!showtime) {
      return res.status(404).json({ message: 'Showtime not found' });
    }
    await showtime.update(req.body);
    res.status(200).json(showtime);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteShowtime = async (req, res) => {
  try {
    const showtime = await Showtime.findByPk(req.params.id);
    if (!showtime) {
      return res.status(404).json({ message: 'Showtime not found' });
    }
    await showtime.destroy();
    res.status(200).json({ message: 'Showtime deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllShowtimes, createShowtime, updateShowtime, deleteShowtime };
