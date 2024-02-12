const mongoose = require("mongoose");
const { MODEL } = require("../utils/constants");
const { LocationSchema, CommentSchema } = require("./shared");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: 3,
      index: true,
    },
    category: {
      type: String,
      required: true,
      index: true,
    },
    price: {
      type: Number,
      required: true,
    },
    negotiable: {
      type: Boolean,
      default: true,
    },
    description: {
      type: String,
      required: true,
    },
    available: {
      type: Boolean,
      default: true,
    },
    comments: [CommentSchema],
    images: [String],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: MODEL.USER,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
    toObject: { virtuals: true }, // So `console.log()` and other functions that use `toObject()` include virtuals
  }
);

module.exports = mongoose.model(MODEL.POST, PostSchema);
