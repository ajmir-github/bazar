const { StatusCode } = require("../utils");
const { userServices, postServices } = require("../services");

// --- Endpoint handlers
exports.getUsers = async ({ query }) => {
  const users = await userServices.findSomeUsers(query);
  for (const user of users) if (user.password) delete user.password;

  return { status: StatusCode.SUCCESS, data: users };
};

exports.getUserById = async ({ params, query }) => {
  const user = await userServices.findUserByID(params.id);
  if (!user)
    return {
      status: StatusCode.NOT_FOUND,
      data: {
        message: "User not found!",
      },
    };
  if (user.password) delete user.password;
  user.posts = await postServices.findSomePosts(query, { userID: user._id });
  return {
    status: StatusCode.SUCCESS,
    data: user,
  };
};

exports.createUser = async ({ body, query }) => {
  const { success, user } = await userServices.createUser(
    body,
    query.withReturn
  );
  if (!success) throw new Error("Database failed to create a user!");
  return {
    status: StatusCode.CREATED,
    data: user || {
      message: "User created!",
    },
  };
};

exports.updateUser = async ({ params, body, query }) => {
  const { success, user } = await userServices.updateUser(
    params.id,
    body,
    query.withReturn
  );
  if (!success) throw new Error("Database failed to update the user!");
  return {
    status: StatusCode.SUCCESS,
    data: user || {
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
