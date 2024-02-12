require("dotenv").config();
const app = require("./app");
const { mongoClient } = require("./utils/database");
// env
const port = process.env.PORT || 4000;
const clientOrigin = process.env.CLIENT_ORIGIN || "*";
const devMode = process.env.NODE_ENV === "development";
const databaseURL = process.env.DATABASE_URL;
if (!databaseURL) throw new Error("Define DATABASE_URL in .env!");

// create server app
const server = app({ credentials: true, origin: clientOrigin });

// connect to the database
mongoClient
  .connect()
  .then(() => console.log("+ Connected to the database"))
  .catch((error) =>
    console.error("- Failed to connect to the database!", devMode && error)
  );

// activate the server
server.listen(port, () =>
  console.log(`+ Server running on port: ${port} client:${clientOrigin}`)
);
