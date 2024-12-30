const express = require('express');
const router = express.Router();
const { avatarUpload } = require('../middleware/uploadMiddleware');
const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

router.put('/:id/avatar', avatarUpload.single('avatar'), userController.updateAvatar);

module.exports = router;
