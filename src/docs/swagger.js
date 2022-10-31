'use strict'
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition : {
        openapi: '3.0.0',
        info: {title: 'Mutant Service', version: '1.0.0'}
    },
    apis: ['src/routes/mutantRoute.js','src/models/dna.model.js', 'src/routes/statsRoute.js']
}

//Docs en JSON format

const swaggerSpec = swaggerJSDoc(options);

//Function to setup our docs.
const swaggerDocs = (app, port) => {
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    console.log(`Visita la documentacion en http://localhost:${port}/docs`)
}

module.exports = swaggerDocs;