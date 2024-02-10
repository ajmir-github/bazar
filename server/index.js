require("dotenv").config();
const app = require("./app");
const apiRouter = require("./api");
const mongoose = require("mongoose");
// env
const port = process.env.PORT || 4000;
const databaseURL = process.env.DATABASE_URL;
const clientOrigin = process.env.CLIENT_ORIGIN || "*";
const devMode = process.env.NODE_ENV === "development";
if (!databaseURL) throw new Error("Define DATABASE_URL in .env!");

// create server app
const server = app({ credentials: true, origin: clientOrigin }, apiRouter);

// connect to the database
mongoose
  .connect(databaseURL, {
    serverApi: mongoose.mongo.ServerApiVersion.v1,
  })
  .then(() => console.log("+ Connected to the database"))
  .catch((error) =>
    console.error("- Failed to connect to the database!", devMode && error)
  );

// activate the server
server.listen(port, () =>
  console.log(`+ Server running on port: ${port} client:${clientOrigin}`)
);
