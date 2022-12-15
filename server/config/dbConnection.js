const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGO_URI;
const connection = () => {
  mongoose
    .connect(MONGO_URI)
    .then((conn) => {
      console.log(`DB is connected to ${conn.connection.host}`);
    })
    .catch((error) => {
      console.log(`DB is not connected ${error.message}`);
      process.exit(1);
    });
};

module.exports = connection;
