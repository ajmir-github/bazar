const mongoose = require("mongoose");
const { MODEL } = require("../utils/constants");

exports.LocationSchema = new mongoose.Schema({
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  accuracy: Number,
});
exports.CommentSchema = new mongoose.Schema({
  rate: {
    type: String,
    enum: ["bad", "neutral", "good"],
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: MODEL.USER,
    required: true,
  },
});
