const express = require('express');
const router = express.Router();
const { getAllFeatures, createFeature, updateFeature, deleteFeature } = require('../controllers/featuresController');

router.get('/', getAllFeatures);
router.post('/', createFeature);
router.put('/:id', updateFeature);
router.delete('/:id', deleteFeature);

module.exports = router;
