const { User, Avatar } = require("../models");
const fs = require('fs').promises;
const path = require('path');

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a user
exports.updateUser = async (req, res) => {
  try {
    const updatedRows = await User.update(req.body, {
      where: { id: req.params.id },
    });
    if (updatedRows[0] === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update user avatar
exports.updateAvatar = async (req, res) => {
    try {
      const userId = parseInt(req.params.id, 10);
      const avatarPath = req.file
        ? path.relative(process.cwd(), req.file.path)
        : null;
  
      if (!avatarPath) {
        return res.status(400).json({ message: "Avatar image is required" });
      }
  
      const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (!allowedMimeTypes.includes(req.file.mimetype)) {
        return res.status(400).json({ message: "Invalid file type. Only images are allowed." });
      }
  
      // Find existing user
      const user = await User.findByPk(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      // Create or update avatar
      const [avatar, created] = await Avatar.findOrCreate({
        where: { userId: userId },
        defaults: { path: avatarPath },
      });
  
      if (!created) {
        try {
          await fs.unlink(path.resolve(avatar.path)); // Delete old file
        } catch (err) {
          console.error("Failed to delete old avatar:", err.message);
        }
        avatar.path = avatarPath;
        await avatar.save();
      }
  
      res.status(200).json({
        message: "Avatar updated successfully",
        avatar,
        previousAvatarPath: created ? null : avatar.path,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Failed to update avatar", error: error.message });
    }
  };

// Delete a user
exports.deleteUser = async (req, res) => {
  try {
    const deletedRows = await User.destroy({ where: { id: req.params.id } });
    if (deletedRows === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
