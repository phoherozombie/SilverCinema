const { Seat } = require('../models');

const getAllSeats = async (req, res) => {
  try {
    const seats = await Seat.findAll();
    res.status(200).json(seats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createSeat = async (req, res) => {
  try {
    const seat = await Seat.create(req.body);
    res.status(201).json(seat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateSeat = async (req, res) => {
  try {
    const seat = await Seat.findByPk(req.params.id);
    if (!seat) {
      return res.status(404).json({ message: 'Seat not found' });
    }
    await seat.update(req.body);
    res.status(200).json(seat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteSeat = async (req, res) => {
  try {
    const seat = await Seat.findByPk(req.params.id);
    if (!seat) {
      return res.status(404).json({ message: 'Seat not found' });
    }
    await seat.destroy();
    res.status(200).json({ message: 'Seat deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllSeats, createSeat, updateSeat, deleteSeat };
