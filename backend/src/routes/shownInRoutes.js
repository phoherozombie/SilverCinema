const express = require('express');
const router = express.Router();
const shownInController = require('../controllers/shownInController');

router.get('/', shownInController.getAllShownIn);
router.post('/', shownInController.createShownIn);
router.put('/:id', shownInController.updateShownIn);
router.delete('/:id', shownInController.deleteShownIn);

module.exports = router;
