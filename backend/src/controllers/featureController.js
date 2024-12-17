const { Feature } = require('../models');

const getAllFeatures = async (req, res) => {
  try {
    const features = await Feature.findAll();
    res.status(200).json(features);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createFeature = async (req, res) => {
  try {
    const feature = await Feature.create(req.body);
    res.status(201).json(feature);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateFeature = async (req, res) => {
  try {
    const feature = await Feature.findByPk(req.params.id);
    if (!feature) {
      return res.status(404).json({ message: 'Feature not found' });
    }
    await feature.update(req.body);
    res.status(200).json(feature);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteFeature = async (req, res) => {
  try {
    const feature = await Feature.findByPk(req.params.id);
    if (!feature) {
      return res.status(404).json({ message: 'Feature not found' });
    }
    await feature.destroy();
    res.status(200).json({ message: 'Feature deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllFeatures, createFeature, updateFeature, deleteFeature };
