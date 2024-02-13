const authMiddleware = require("./authMiddleware");
const userMiddleware = require("./userMiddleware");
const postMiddleware = require("./postMiddleware");
const sharedMiddleware = require("./sharedMiddleware");
module.exports = {
  authMiddleware,
  userMiddleware,
  postMiddleware,
  sharedMiddleware,
};
