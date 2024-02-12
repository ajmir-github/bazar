const { ObjectId } = require("mongodb");

exports.filterByID = (id) => ({ _id: new ObjectId(id) });
