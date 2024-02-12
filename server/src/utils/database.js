const { MongoClient, ServerApiVersion } = require("mongodb");

const mongoClient = new MongoClient(process.env.DATABASE_URL, {
  serverApi: ServerApiVersion.v1,
});

const COLLECTIONS = {
  USER: "Users",
  POST: "Posts",
  COMMENT: "Comments",
};

const database = mongoClient.db(process.env.DATABASE_NAME || "test");
const UserCollection = database.collection(COLLECTIONS.USER);
const PostCollection = database.collection(COLLECTIONS.POST);
const CommentCollection = database.collection(COLLECTIONS.COMMENT);

module.exports = {
  COLLECTIONS,
  mongoClient,
  database,
  UserCollection,
  PostCollection,
  CommentCollection,
};
