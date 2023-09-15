var jwt = require("jsonwebtoken");
require("dotenv").config();

const privateKey = process.env.PRIVATE_KEY;

module.exports = async (req, res) => {
  jwt.verify(req.token, privateKey, (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log("UserData", data);
  });
};
