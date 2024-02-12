const authMiddleware = require("./authMiddleware");
const userMiddleware = require("./userMiddleware");
const postMiddleware = require("./postMiddleware");
module.exports = {
  authMiddleware,
  userMiddleware,
  postMiddleware,
};
