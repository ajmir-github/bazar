const { encrypt, StatusCode } = require("../utils");
const { userServices } = require("../services");

// --- Authentication
exports.protectRoutes = async ({ method }, cache) => {
  if (method === "GET") return; // ignore get requests
  if (!request.headers.authorization)
    return {
      status: StatusCode.AUTHENTICATION_REQUIRED,
      data: {
        message: "Lacking authorization!",
      },
    };
  const userId = encrypt.verifyToken(request.headers.authorization);
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
exports.isAuthorizedToMutateUser = (request, { auth, user }) => {
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
exports.isAuthorizedToMutatePost = (request, { auth, post }) => {
  if (auth.isAdmin) return;
  const authID = auth._id.toString();
  const postUserID = post.userID._id.toString();
  if (authID !== postUserID)
    return {
      status: StatusCode.AUTHORIZATION_REQUIRED,
      data: {
        message: "You are not allowed to change this post!",
      },
    };
};
