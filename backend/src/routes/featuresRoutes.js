const express = require('express');
const router = express.Router();
const { featureUpload } = require('../middleware/uploadMiddleware');

// Import controller functions
const { getAllFeatures, createFeature, updateFeature, deleteFeature } = require('../controllers/featuresController');

// Middleware to parse text fields for form-data
const parseFormData = express.urlencoded({ extended: true });

// Routes
router.get('/', getAllFeatures);
router.post('/', parseFormData, featureUpload.single('image'), createFeature);
router.put('/:id', parseFormData, featureUpload.single('image'), updateFeature);
router.delete('/:id', deleteFeature);

module.exports = router;
