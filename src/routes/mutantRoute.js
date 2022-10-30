"use strict";
const express = require("express");
const router = express.Router();

//IMPORT CONTROLLER
const mutantController = require("../controllers/mutantController");

//USE CONTROLLER
router.post("/mutation", mutantController.mutantService);

//EXPORT ROUTE
module.exports = router;
