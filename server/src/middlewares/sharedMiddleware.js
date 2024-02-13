const { StatusCode, isID, formatZodError } = require("../utils");

exports.validateIDParams = ({ params }) => {
  if (isID(params.id)) return;
  return new Error("Invalid id provided!");
};

exports.validateBodyMiddlewareBuilder = (validator) => (request) => {
  const validation = validator.safeParse(request.body);
  if (!validation.success)
    return {
      status: StatusCode.BAD_REQUEST,
      data: formatZodError(validation.error),
    };
  request.body = validation.data;
};
