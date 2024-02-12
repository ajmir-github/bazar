const express = require("express");
const cors = require("cors");
const path = require("path");
const adapt = require("./utils/adapt");
const StatusCode = require("./utils/StatusCode");
const { authRouter, postRouter, userRouter } = require("./routers");

module.exports = function (corsOptions) {
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

  app.use("/api/auth", authRouter);
  app.use("/api/user", userRouter);
  app.use("/api/post", postRouter);
  app.use(
    "*",
    adapt(() => ({
      status: StatusCode.NOT_FOUND,
      data: {
        message: "URL/File not found!",
      },
    }))
  );

  // catch some unexpected errors, like if wrong json data send
  app.use((error, request, response, next) =>
    response.status(StatusCode.ERROR).json({
      message: error.message,
    })
  );

  return app;
};
