const { StatusCode, encrypt } = require("../utils");
const { userServices } = require("../services");

exports.signIn = async (request) => {
  const { email, password } = request.body;
  // get user
  const user = await userServices.findUserByEmail(email);
  if (!user)
    return {
      status: StatusCode.BAD_REQUEST,
      data: {
        email: "Email not found!",
      },
    };
  // match password
  if (!encrypt.compare(password, user.password))
    return {
      status: StatusCode.BAD_REQUEST,
      data: {
        password: "Password not matched!",
      },
    };
  // sign token
  const token = encrypt.signToken(user._id.toString());
  return {
    status: StatusCode.SUCCESS,
    data: {
      token,
      user,
    },
  };
};
exports.signUp = async (request) => {
  // create user
  const { success, user } = await userServices.createUser(request.body);
  if (!success) throw new Error("Database failed to create a user!");
  // sign token
  const token = encrypt.signToken(user._id.toString());
  return {
    status: StatusCode.SUCCESS,
    data: {
      token,
      user,
    },
  };
};

exports.getAuth = async (request, cache) => {
  return {
    data: cache.auth,
  };
};
