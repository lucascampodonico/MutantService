"use strict";
const express = require("express");
const router = express.Router();

//IMPORT CONTROLLER
const statsController = require("../controllers/statsController");

//USE CONTROLLER
/**
 * @openapi
 * /stats:
 *   get:
 *     summary: Estadisticas de verificaciones de ADN.
 *     tags:
 *       - Stats
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *          application/json:
 *              schema:
 *                  type: object
 *                  example: {"count_mutations": 3,"count_no_mutations": 3,"ratio": 1}
 */

router.get("/stats", statsController.statsService);

//EXPORT ROUTE
module.exports = router;
