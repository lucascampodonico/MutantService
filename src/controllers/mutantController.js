"use strict";
const Adn = require('../models/dna.model');

const mutantService = async (req, res) => {

    let dna = req.body.dna;
    let hasMutant = false;

    //CARACTERES PERMITIDOS
    let includeLetter = ['A','C','T','G'];

    if(Array.isArray(dna)){
        //COMPROBAR QUE SEA VALIDA LA SECUENCIA DE ADN NxN y SOLO INCLUYA BASES NITROGENAS VALIDAS
        for(let item of dna){
            try {
                if(!(item.length === dna.length && dna.length > 4 )){throw "Tamaño de secuencia invalida"};
                for(let i = 0; i < item.length; i++){
                    if(!(includeLetter.some(v=>item[i].includes(v)))){throw "El ADN incluye caracteres invalidos"}
                }
            } catch (error) {
                return res.status(400).send(error)  
            }
        }    

        //RECORRO CADA ITEM DEL ARRAY PARA COMPROBACION VERTICAL
        for (let item = 0; item < dna.length; item++) {
            // RECORRO EL LARGO DEL ITEM
            for (let i = 0; i < dna[0].length; i++) {
                // VERIFICAMOS SI EXISTE SECUENCIA MAYOR A 4 CARACTERES IGUALES EN VERTICAL;
                try {
                    if ( !(dna[item].charAt(i) == dna[item + 1]?.charAt(i)) ) {throw ""}
                    if ( !(dna[item].charAt(i) == dna[item + 2]?.charAt(i)) ) {throw ""}
                    if ( !(dna[item].charAt(i) == dna[item + 3]?.charAt(i)) ) {throw ""}
                        hasMutant = true;
                } catch (error) {
                }
                // VERIFICAMOS SI EXISTE SECUENCIA MAYOR A 4 CARACTERES IGUALES OBLICUO A LA DERECHA
                try {
                if(!(dna[item].charAt(i) == dna[item + 1]?.charAt(i+1))){throw ""}
                if(!(dna[item].charAt(i) == dna[item + 2]?.charAt(i+2))){throw ""}
                if(!(dna[item].charAt(i) == dna[item + 3]?.charAt(i+3))){throw ""}
                    hasMutant = true;
                } catch (error) {
                }
                // VERIFICAMOS SI EXISTE SECUENCIA MAYOR A 4 CARACTERES IGUALES OBLICUO A LA IZQUIERDA  
                try { 
                    if(!(dna[item].charAt(i) == dna[item + 1]?.charAt(i-1))){throw ""}
                    if(!(dna[item].charAt(i) == dna[item + 2]?.charAt(i-2))){throw ""}
                    if(!(dna[item].charAt(i) == dna[item + 3]?.charAt(i-3))){throw ""}
                        hasMutant = true;   
                } catch (error) {
                }
                // VERIFICAMOS SI EXISTE SECUENCIA MAYOR A 4 CARACTERES IGUALES EN HORIZONTAL
                try {
                    if ( !(dna[item].charAt(i) === dna[item].charAt(i+1)) ) {throw ""}
                    if ( !(dna[item].charAt(i) === dna[item].charAt(i+2)) ) {throw ""}
                    if ( !(dna[item].charAt(i) === dna[item].charAt(i+3)) ) {throw ""}
                        hasMutant = true;
                } catch (error) {
                }
            }
        }

        //COMPROBAMOS SI EXISTE SINO GUARDAMOS EN DB
        let siExiste = await Adn.findOne({dna: dna});
        if(!siExiste){ await Adn.create({dna, hasMutant})};

        //ENVIAMOS EL RESULTADO DE LAS VERIFICACIONES
        if (hasMutant){
            return res.status(200).send(hasMutant);
        } else{
            return res.status(403).send(hasMutant);
        } 
    } else {
        return res.status(400).send('El cliente no envio un Json valido');
    }
};

module.exports = { mutantService };
