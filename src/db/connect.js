const mongoose = require("mongoose");
const { DB_URL, CONNECT_DB_OPTS } = require("../helpers/constants");

const connectMongo = async () => {
  mongoose.connect(DB_URL, CONNECT_DB_OPTS);
  console.log("Database connection successful");
};

module.exports = { connectMongo };
