const jwt = require("jsonwebtoken");

const createJWT = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET_TOKEN, {
    expiresIn: process.env.JWT_EXPIRATION_TIME,
  });
};

const validateJwt = (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization) {
    const token = authorization.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET_TOKEN, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: "Invalid Token" });
      } else {
        req.user = decodedToken;
        next();
      }
    });
  } else {
    res.status(400).json({ message: "Missing access token" });
  }
};

module.exports = {
  createJWT,
  validateJwt,
};
