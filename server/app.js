const express = require("express");
const cors = require("cors");
const path = require("path");
const { STATUS_CODE } = require("./utils/constants");
const adapt = require("./utils/adapt");

module.exports = function (corsOptions, RootRouter) {
  const app = express();

  app.use((request, response, next) => {
    const { method, url, xhr } = request;
    console.log({ method, url, xhr });
    next();
  });

  app.use(cors(corsOptions));
  app.use("static", express.static(path.join(__dirname, "public")));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use("/api", RootRouter);
  app.use(
    "*",
    adapt(() => ({
      status: STATUS_CODE.NOT_FOUND,
      data: {
        message: "URL/File not found!",
      },
    }))
  );

  // catch some unexpected errors, like if wrong json data send
  app.use((error, request, response, next) =>
    response.status(STATUS_CODE.ERROR).json({
      message: error.message,
    })
  );

  return app;
};
