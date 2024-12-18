const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Helper function to set up dynamic upload directories
const getStorage = (folderName) => {
  return multer.diskStorage({
    destination: (req, file, cb) => {
      const uploadDir = path.join(__dirname, `../uploads/${folderName}`);

      // Ensure the directory exists
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      const ext = path.extname(file.originalname);
      cb(null, 'image-' + uniqueSuffix + path.extname(file.originalname));
    },
  });
};

// File filter: Allow only images
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed!"), false);
  }
};

// Reusable Multer function to create upload middleware
const createUpload = (folderName) => {
  return multer({
    storage: getStorage(folderName),
    fileFilter: fileFilter,
    limits: { fileSize: 2 * 1024 * 1024 },
  });
};

// Export specific upload configurations
module.exports = {
  featureUpload: createUpload("features"),
  movieUpload: createUpload("movies"),
};
