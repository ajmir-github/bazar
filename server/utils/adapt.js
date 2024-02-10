const mongoose = require("mongoose");
const { STATUS_CODE } = require("./constants");

module.exports =
  (...handlers) =>
  async (request, response, next) => {
    const safeCache = {};
    try {
      // if no handler
      if (!handlers.length)
        throw new Error("No handler is registered for the given URL!");

      // run the handler
      for (const handler of handlers) {
        const result = await handler(request, safeCache);
        if (!result) continue; // next if falsy value returned

        if (result instanceof Error) throw result; // handle unexpected errors
        const { status, data } = result; // handle resposne
        return response.status(status || STATUS_CODE.SUCCESS).json(data);
      }

      // if no return at all
      throw new Error("The registered handlers are failed to respond!");
    } catch (error) {
      // handle validation error
      if (error instanceof mongoose.MongooseError) {
        if (error.name === "ValidationError")
          return response
            .status(STATUS_CODE.BAD_REQUEST)
            .json(
              Object.fromEntries(
                Object.entries(error.errors).map(([key, value]) => [
                  key,
                  value.message,
                ])
              )
            );
      }
      // catch all errors
      response.status(STATUS_CODE.ERROR).json({
        message: error.message,
      });
    }
  };
