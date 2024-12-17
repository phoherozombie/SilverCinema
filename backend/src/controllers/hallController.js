const { Hall } = require('../models');

const getAllHalls = async (req, res) => {
  try {
    const halls = await Hall.findAll();
    res.status(200).json(halls);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createHall = async (req, res) => {
  try {
    const hall = await Hall.create(req.body);
    res.status(201).json(hall);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateHall = async (req, res) => {
  try {
    const hall = await Hall.findByPk(req.params.id);
    if (!hall) {
      return res.status(404).json({ message: 'Hall not found' });
    }
    await hall.update(req.body);
    res.status(200).json(hall);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteHall = async (req, res) => {
  try {
    const hall = await Hall.findByPk(req.params.id);
    if (!hall) {
      return res.status(404).json({ message: 'Hall not found' });
    }
    await hall.destroy();
    res.status(200).json({ message: 'Hall deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllHalls, createHall, updateHall, deleteHall };
