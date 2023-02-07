const jwt = require('jsonwebtoken');

const getUser = (req, res, next) => {
  const token = jwt.verify(req.token, process.env.JWT_SECRET);

  if (!token.id) {
    return res.status(401).json({ error: 'token is missing' });
  }
  req.user = token;
  next();
};

module.exports = getUser;