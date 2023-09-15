const routers = require("express").Router();
const signupController = require("../controllers/signupController");

routers.post("/signup", signupController);

module.exports = routers;
