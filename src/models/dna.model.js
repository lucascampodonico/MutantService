'use strict'
const mongoose = require('mongoose');


/**
 * @openapi
 * components:
 *   schemas:
 *     DnaSchema:
 *       type: object
 *       properties:
 *         dna:
 *           type: array
 *           items:
 *             type: string
 *           example: ["ACTGAC", "ACTGAC", "ACTGAC", "ACTGAC", "ACTGAC", "ACTGAC"]
 */

const DnaSchema = mongoose.Schema({
    dna: {type: Array, required: true},
    hasMutant: {type: Boolean, required: true}
})


module.exports = mongoose.model('Dna', DnaSchema)
