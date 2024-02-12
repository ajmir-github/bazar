const { StatusCode, encrypt } = require("../utils");
const { userServices } = require("../services");

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

exports.hashPassword = (request) => {
  if (request.body.password)
    request.body.password = encrypt.hash(request.body.password);
};

exports.isEmailUnique = async ({ body }) => {
  if (body.email && (await userServices.findUserByEmail(body.email))) {
    return {
      status: StatusCode.BAD_REQUEST,
      data: {
        email: "This email is already in use!",
      },
    };
  }
};
