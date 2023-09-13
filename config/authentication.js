const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'Authentication required' });
  
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.status(403).json({ message: 'Invalid token' });
      req.user = user; // Store user information for further use
      next();
    });
  }

module.exports = authenticateToken
