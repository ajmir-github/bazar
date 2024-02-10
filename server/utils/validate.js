const { STATUS_CODE } = require("./constants");
const mongoose = require("mongoose");

module.exports = async function (ModelInstance) {
  try {
    await ModelInstance.validate();
    return null;
  } catch (error) {
    return error instanceof mongoose.MongooseError
      ? {
          status: STATUS_CODE.BAD_REQUEST,
          data: Object.fromEntries(
            Object.entries(error.errors).map(([key, value]) => [
              key,
              value.message,
            ])
          ),
        }
      : error;
  }
};
