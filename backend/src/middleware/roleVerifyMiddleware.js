const jwt = require('jsonwebtoken');

const verifyRole = (roleRequired) => {
  return (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(403).json({ message: "Access denied." });

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (decoded.role !== roleRequired) {
        return res.status(403).json({ message: "Unauthorized role." });
      }
      req.user = decoded;
      next();
    } catch (err) {
      return res.status(401).json({ message: "Invalid token." });
    }
  };
};

module.exports = { verifyRole };