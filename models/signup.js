const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  personalPhoneNumber: String,
  fatherPhoneNumber: String,
  motherPhoneNumber: String,
  email: String,
  password: String,
});

const signupModel = mongoose.model("signup", signupSchema);

module.exports = signupModel;
