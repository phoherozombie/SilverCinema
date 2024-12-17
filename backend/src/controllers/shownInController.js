const { ShownIn } = require('../models');

const getAllShownIn = async (req, res) => {
  try {
    const shownIn = await ShownIn.findAll();
    res.status(200).json(shownIn);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createShownIn = async (req, res) => {
  try {
    const shownIn = await ShownIn.create(req.body);
    res.status(201).json(shownIn);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateShownIn = async (req, res) => {
  try {
    const shownIn = await ShownIn.findByPk(req.params.id);
    if (!shownIn) {
      return res.status(404).json({ message: 'Shown In not found' });
    }
    await shownIn.update(req.body);
    res.status(200).json(shownIn);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteShownIn = async (req, res) => {
  try {
    const shownIn = await ShownIn.findByPk(req.params.id);
    if (!shownIn) {
      return res.status(404).json({ message: 'Shown In not found' });
    }
    await shownIn.destroy();
    res.status(200).json({ message: 'Shown In deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllShownIn, createShownIn, updateShownIn, deleteShownIn };
