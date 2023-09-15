const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connect = async () => {
  const dbConnect = await mongoose.connect(process.env.DB_URL);
  if (dbConnect) {
    console.log("Database connected...");
  }
  return dbConnect;
};

connect();

module.exports = connect;
