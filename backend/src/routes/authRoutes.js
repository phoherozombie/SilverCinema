const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { verifyRole } = require('../middleware/roleVerifyMiddleware');

// POST /api/login - User Login
router.post('/login', authController.loginUser);

// Protected Admin Route
router.get('/admin', verifyRole('admin'), (req, res) => {
  res.status(200).json({ message: "Welcome Admin!" });
});

module.exports = router;
