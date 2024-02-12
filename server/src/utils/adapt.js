const StatusCode = require("./StatusCode");

const devMode = process.env.NODE_ENV === "development";

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
        return response.status(status || StatusCode.SUCCESS).json(data);
      }
      // if no return at all
      return next();
      // throw new Error("The registered handlers are failed to respond!");
    } catch (error) {
      if (devMode) console.log(error);
      // catch all errors
      response.status(StatusCode.ERROR).json({
        message: error.message,
      });
    }
  };
