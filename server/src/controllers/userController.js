const { StatusCode } = require("../utils");
const { userServices } = require("../services");

// --- Middlewares
exports.cacheUser = async ({ params }, cache) => {
  const user = await userServices.findUserByID(params.id);
  if (!user)
    return {
      status: StatusCode.NOT_FOUND,
      data: {
        message: "User not found!",
      },
    };
  cache.user = user;
};

// --- Endpoint handlers
exports.getUsers = async (request) => {
  const users = await userServices.findSomeUsers();
  return { status: StatusCode.SUCCESS, data: users };
};

exports.getUserById = async ({ params }) => {
  const user = await userServices.findUserByID(params.id);
  if (!user)
    return {
      status: StatusCode.NOT_FOUND,
      data: {
        message: "User not found!",
      },
    };
  return {
    status: StatusCode.SUCCESS,
    data: user,
  };
};

exports.createUser = async ({ body }) => {
  const { success } = await userServices.createUser(body);
  if (!success) throw new Error("Database failed to create a user!");
  return {
    status: StatusCode.CREATED,
    data: {
      message: "User created!",
    },
  };
};

exports.updateUser = async ({ params, body }) => {
  const { success } = await userServices.updateUser(params.id, body);
  if (!success) throw new Error("Database failed to update the user!");
  return {
    status: StatusCode.SUCCESS,
    data: {
      message: "User updated!",
    },
  };
};

exports.deleteUser = async ({ params }, cache) => {
  const { success } = await userServices.deleteUser(params.id);
  if (!success) throw new Error("Database failed to delete the user!");
  return {
    status: StatusCode.SUCCESS,
    data: {
      message: "User deleted!",
    },
  };
};
