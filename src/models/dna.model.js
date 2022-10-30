'use strict'
const mongoose = require('mongoose');

const DnaSchema = mongoose.Schema({
    dna: {type: Array, required: true},
    hasMutant: {type: Boolean, required: true}
})

module.exports = mongoose.model('Dna', DnaSchema)
