"use strict";
const express = require("express");
const router = express.Router();

//IMPORT CONTROLLER
const mutantController = require("../controllers/mutantController");

//USE CONTROLLER
/**
 * @openapi
 * /mutation:
 *   post:
 *     summary: Verificar ADN de persona
 *     tags:
 *       - Mutants
 *     requestBody:
 *         description: Adn de ejemplo a verificar
 *         required: true
 *         content:
 *             application/json:
 *                 schema:
 *                     $ref: "#/components/schemas/DnaSchema"
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *          text/plain:
 *              schema:
 *                  type: string
 *                  example: true
 */

router.post("/mutation", mutantController.mutantService);

//EXPORT ROUTE
module.exports = router;
