// src/middleware/authMiddleware.js

const jwt = require('jsonwebtoken');
const User = require('../Models/UserModel');

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ success: false, message: 'Unauthorized access. No token provided.' });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);

    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Unauthorized access. Invalid token.',
    });
  }
};

module.exports = authMiddleware;
