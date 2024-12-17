const { HallwiseSeat } = require('../models');

const getAllHallwiseSeats = async (req, res) => {
  try {
    const hallwiseSeats = await HallwiseSeat.findAll();
    res.status(200).json(hallwiseSeats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createHallwiseSeat = async (req, res) => {
  try {
    const hallwiseSeat = await HallwiseSeat.create(req.body);
    res.status(201).json(hallwiseSeat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateHallwiseSeat = async (req, res) => {
  try {
    const hallwiseSeat = await HallwiseSeat.findOne({
      where: { hall_id: req.params.hall_id, seat_id: req.params.seat_id }
    });
    if (!hallwiseSeat) {
      return res.status(404).json({ message: 'Hallwise Seat not found' });
    }
    await hallwiseSeat.update(req.body);
    res.status(200).json(hallwiseSeat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteHallwiseSeat = async (req, res) => {
  try {
    const hallwiseSeat = await HallwiseSeat.findOne({
      where: { hall_id: req.params.hall_id, seat_id: req.params.seat_id }
    });
    if (!hallwiseSeat) {
      return res.status(404).json({ message: 'Hallwise Seat not found' });
    }
    await hallwiseSeat.destroy();
    res.status(200).json({ message: 'Hallwise Seat deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllHallwiseSeats, createHallwiseSeat, updateHallwiseSeat, deleteHallwiseSeat };
