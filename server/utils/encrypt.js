const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");

const SECRET_KEY = process.env.SECRET_KEY || "SECRET_KEY";

exports.signToken = (_id) => jwt.sign(_id, SECRET_KEY);
exports.verifyToken = (token) => jwt.verify(token, SECRET_KEY);
exports.hash = (str) => bcryptjs.hashSync(str, 10);
exports.compare = (str, hash) => bcryptjs.compareSync(str, hash);
