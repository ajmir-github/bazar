const UserModel = require("../models/UserModel");
const { STATUS_CODE } = require("../utils/constants");
const { compare, signToken, verifyToken } = require("../utils/encrypt");
const validate = require("../utils/validate");

exports.signIn = async (request) => {
  const { email, password } = request.body;
  // get user
  const user = await UserModel.findOne({ email });
  if (!user)
    return {
      status: STATUS_CODE.BAD_REQUEST,
      data: {
        email: "Email not found!",
      },
    };
  // match password
  if (!compare(password, user.password))
    return {
      status: STATUS_CODE.BAD_REQUEST,
      data: {
        password: "Password not matched!",
      },
    };
  // sign token
  const token = signToken(user._id.toString());
  return {
    status: STATUS_CODE.SUCCESS,
    data: {
      token,
      user,
    },
  };
};
exports.signUp = async (request) => {
  const rawUser = new UserModel(request.body);
  // validate user
  const validationError = await validate(rawUser);
  if (validationError) return validationError;
  // create user
  const user = await rawUser.save();
  // sign token
  const token = signToken(user._id.toString());
  return {
    status: STATUS_CODE.SUCCESS,
    data: {
      token,
      user,
    },
  };
};

exports.getAuth = async (request, cache) => {
  if (!request.headers.authorization)
    return {
      status: STATUS_CODE.AUTHENTICATION_REQUIRED,
      data: {
        message: "Lacking authorization header!",
      },
    };
  const token = request.headers.authorization.replace("Bearer ", "");
  const userId = verifyToken(token);
  const user = await UserModel.findById(userId);
  if (!user)
    return {
      status: STATUS_CODE.AUTHENTICATION_REQUIRED,
      data: {
        message: "This user does not exist anymore!",
      },
    };
  return {
    data: user,
  };
};
exports.cacheAuth = async (request, cache) => {
  if (!request.headers.authorization) return;
  const token = request.headers.authorization.replace("Bearer ", "");
  const userId = verifyToken(token);
  const user = await UserModel.findById(userId);
  if (!user) return;
  cache.auth = user;
};

exports.onlyAutheticatedUsers = (_, cache) => {
  if (!cache.auth)
    return {
      status: STATUS_CODE.AUTHENTICATION_REQUIRED,
      data: {
        message: "Please login first!",
      },
    };
};
