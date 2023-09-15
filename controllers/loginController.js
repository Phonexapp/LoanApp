const bcrypt = require("bcrypt");
const signupModel = require("../models/signup");
var jwt = require("jsonwebtoken");
require("dotenv").config();

const privateKey = process.env.PRIVATE_KEY;

module.exports = async (req, res) => {
  const { ID, email, password } = req.body;
  const user = await signupModel.findById(ID);
  console.log("use", user);

  const HashPassword = await bcrypt.compare(password, user.password);

  if (email == user.email && HashPassword) {
    jwt.sign({ email }, privateKey, { expiresIn: "24h" }, (Error, token) => {
      if (Error) {
        res.status(500).json({ message: "Token Error" });
      } else {
        res.status(200).json({ token });
      }
    });
  }
};
