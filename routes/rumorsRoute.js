// const { getAllRumours } = require("../constrollers/rumorsController");
const express = require('express')
rummersController = require("../controllers/RumorsController");
const rummersRouter = express.Router();

rummersRouter.get("/", rummersController.getAllRumours);

module.exports = rummersRouter;
