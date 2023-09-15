const signupModel = require("../models/signup");
const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = async (req, res) => {
  const {
    firstName,
    lastName,
    personalPhoneNumber,
    fatherPhoneNumber,
    motherPhoneNumber,
    email,
    password,
  } = req.body;

  const bcryptHashPassword = await bcrypt.hash(password, saltRounds);

  const signupInstance = await signupModel({
    firstName: firstName,
    lastName: lastName,
    personalPhoneNumber: personalPhoneNumber,
    fatherPhoneNumber: fatherPhoneNumber,
    motherPhoneNumber: motherPhoneNumber,
    email: email,
    password: bcryptHashPassword,
  });

  const dataSave = await signupInstance.save();

  //   if (dataSave) {
  //     console.log("Data Saved in the Database...");
  //   }

  dataSave
    ? console.log("Data Saved in the Database...")
    : console.log("Data not Saved in the Database...");

  res.status(200).json({
    message: "Data Saved Successfully...",
  });
};
