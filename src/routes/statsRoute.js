"use strict";
const express = require("express");
const router = express.Router();

//IMPORT CONTROLLER
const statsController = require("../controllers/statsController");

//USE CONTROLLER
router.get("/stats", statsController.statsService);

//EXPORT ROUTE
module.exports = router;
