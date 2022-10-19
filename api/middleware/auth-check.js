const jwt = require("jsonwebtoken");

module.exports = function auth(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];

    try {
      const verified = jwt.verify(bearerToken, process.env.TOKEN_SECRET);
      req.user = verified;
      next();
    } catch (error) {
      res.status(400).json({ status: "error", error: "invalid token" });
    }
  } else {
    res.sendStatus(403);
  }
};
