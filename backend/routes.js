const express = require("express");
const route = express.Router();
const HomeController = require("./controllers/homeController");

// Rotas da home
route.get("/", HomeController.get);
route.delete("/", HomeController.delete);
route.post("/", HomeController.post);

module.exports = route; 
