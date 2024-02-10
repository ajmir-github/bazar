const mongoose = require("mongoose");
const { MODEL } = require("../utils/constants");
const { LocationSchema, CommentSchema } = require("./shared");

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    fullName: {
      type: String,
      min: 3,
    },
    phoneNumber: String,
    whatsUpNumber: String,
    profile: String,
    isAdmin: {
      type: Boolean,
      default: false,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    location: LocationSchema,
    views: {
      type: Number,
      default: 0,
    },
    comments: [CommentSchema],
  },
  {
    timestamps: true,
  }
);

UserSchema.virtual("posts", {
  ref: MODEL.POST,
  localField: "_id",
  foreignField: "user",
});

module.exports = mongoose.model(MODEL.USER, UserSchema);
