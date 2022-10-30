"use strict";
const Dna = require('../models/dna.model');

const statsService = async (req, res) => {

    //OBTENEMOS LOS ADN DE LA BASE DE DATOS
    let areMutants = await Dna.find({hasMutant: true});
    let arentMutants = await Dna.find({hasMutant: false});
    
    if(!areMutants.length) {areMutants = 0};
    if(!arentMutants.length){arentMutants = 0};

    //ENVIAMOS LAS ESTADISTICAS EN JSON
    let stats = {
        count_mutations: areMutants.length,
        count_no_mutations: arentMutants.length,
        ratio: (areMutants.length / arentMutants.length)
      };
      return res.status(200).json(stats);
};

module.exports = { statsService };

