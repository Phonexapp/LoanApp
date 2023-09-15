const routers = require("express").Router();
const HomeController = require("../controllers/Homecontroller");

function getToken(req, res, next) {
  const Breaer = req.headers["authorization"];
  if (typeof Breaer !== "undefined") {
    const Data = Breaer.split(" ");
    const Token = Data[1];
    req.token = Token;
  }
  next();
}

routers.post("/home", getToken, HomeController);

module.exports = routers;
