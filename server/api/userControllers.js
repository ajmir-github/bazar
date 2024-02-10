const UserModel = require("../models/UserModel");
const { STATUS_CODE } = require("../utils/constants");
const { hash } = require("../utils/encrypt");
const validate = require("../utils/validate");

// --- Middlewares
exports.cacheUser = async (request, cache) => {
  const user = await UserModel.findById(request.params.id);
  if (!user)
    return {
      status: STATUS_CODE.NOT_FOUND,
      data: {
        message: "User not found!",
      },
    };
  cache.user = user;
};

exports.hashPassword = (request) => {
  if (request.body.password)
    request.body.password = hash(request.body.password);
};

exports.isEmailUnique = async (request) => {
  if (
    request.body.email &&
    (await UserModel.findOne({ email: request.body.email }))
  ) {
    return {
      status: STATUS_CODE.BAD_REQUEST,
      data: {
        email: "This email is already in use!",
      },
    };
  }
};

// --- Endpoint handlers

exports.getUsers = async (request) => {
  const users = await UserModel.find({}, "-password -__v -reported");
  return { status: STATUS_CODE.SUCCESS, data: users };
};

exports.getUserById = async (request) => {
  const user = await UserModel.findById(
    request.params.id,
    "-password -__v -reported"
  ).populate("posts");
  console.log(user);
  if (!user)
    return {
      status: STATUS_CODE.NOT_FOUND,
      data: {
        message: "User not found!",
      },
    };
  return {
    status: STATUS_CODE.SUCCESS,
    data: user,
  };
};

exports.createUser = async (request) => {
  const userInstance = new UserModel(request.body);
  const validationError = await validate(userInstance);
  if (validationError) return validationError;
  const user = await userInstance.save();
  return {
    status: STATUS_CODE.CREATED,
    data: user,
  };
};

exports.updateUser = async (request, cache) => {
  await cache.user.updateOne(request.body);
  return {
    status: STATUS_CODE.SUCCESS,
    data: {
      message: "User updated!",
    },
  };
};

exports.deleteUser = async (request, cache) => {
  await cache.user.deleteOne();
  return {
    status: STATUS_CODE.SUCCESS,
    data: {
      message: "User deleted!",
    },
  };
};
