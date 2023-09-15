const routers = require("express").Router();
const loginController = require("../controllers/loginController");

routers.post("/login", loginController);

module.exports = routers;
