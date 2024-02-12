const { encrypt, StatusCode } = require("../utils");
const { userServices } = require("../services");

// --- Authentication
exports.onlyAuthenticated = async ({ headers, method }, cache) => {
  if (method === "GET") return;
  if (!headers.authorization)
    return {
      status: StatusCode.AUTHENTICATION_REQUIRED,
      data: {
        message: "Lacking authorization!",
      },
    };
  const userId = encrypt.verifyToken(headers.authorization);
  const user = await userServices.findUserByID(userId);
  if (!user)
    return {
      status: StatusCode.AUTHENTICATION_REQUIRED,
      data: {
        message: "This user does not exist anymore!",
      },
    };

  cache.auth = user;
};

// --- Authorization
exports.onlyAuthorizedToMutateUser = (_, { auth, user }) => {
  const authID = auth._id.toString();
  const userID = user._id.toString();
  if (authID === userID) return; // if the user is itself
  if (auth.isAdmin && !user.isAdmin) return; // if the user is admin
  // else
  return {
    status: StatusCode.AUTHORIZATION_REQUIRED,
    data: {
      message: "You are not allowed to change this user!",
    },
  };
};
exports.onlyAuthorizedToMutatePost = (_, { auth, post }) => {
  const authID = auth._id.toString();
  const postUserID = post.userID.toString();
  if (authID !== postUserID)
    return {
      status: StatusCode.AUTHORIZATION_REQUIRED,
      data: {
        message: "You are not allowed to change this post!",
      },
    };
};

exports.onlyAdmin = (_, { auth }) => {
  if (auth.isAdmin) return;
  return {
    status: StatusCode.AUTHORIZATION_REQUIRED,
    data: {
      message: "You are not allowed to create a user unless you are an admin!",
    },
  };
};
