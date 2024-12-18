const { Feature } = require('../models');
const path = require('path');

// Get all features
exports.getAllFeatures = async (req, res) => {
  try {
    const features = await Feature.findAll();
    res.status(200).json(features);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve features', error: error.message });
  }
};

// Create a new feature
exports.createFeature = async (req, res) => {
  try {
    const { title, description, theatre_id } = req.body;
    const imagePath = req.file ? path.relative(process.cwd(), req.file.path) : null;

    if (!title || !description || !theatre_id) {
      return res.status(400).json({ message: 'Title, description,theatre_id and image_path are required' });
    }

    const feature = await Feature.create({
      title,
      description,
      theatre_id,
      image_path: imagePath,
    });

    res.status(201).json({ message: 'Feature created successfully', feature });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// Update a feature
exports.updateFeature = async (req, res) => {
  try {
    const { title, description, theatre_id } = req.body;
    const imagePath = req.file ? req.file.path : null;

    // Find existing feature
    const feature = await Feature.findByPk(req.params.id);
    if (!feature) {
      return res.status(404).json({ message: 'Feature not found' });
    }

    // Update feature fields
    feature.title = title || feature.title;
    feature.description = description || feature.description;
    feature.theatre_id = theatre_id || feature.theatre_id;

    // Update image only if a new one is uploaded
    if (imagePath) {
      feature.image_path = imagePath;
    }

    await feature.save();
    res.status(200).json({ message: 'Feature updated successfully', feature });
  } catch (error) {
    res.status(400).json({ message: 'Failed to update feature', error: error.message });
  }
};

// Delete a feature
exports.deleteFeature = async (req, res) => {
  try {
    const deletedRows = await Feature.destroy({ where: { id: req.params.id } });
    if (deletedRows === 0) {
      return res.status(404).json({ message: 'Feature not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete feature', error: error.message });
  }
};
