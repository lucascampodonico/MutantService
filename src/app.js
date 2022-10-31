"use strict";
require ('dotenv').config({path: './.env'});
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const server = require("http").createServer(app);
const port = process.env.PORT || 3001;
const swaggerDocs = require('./docs/swagger');

//IMPORT ROUTES
const mutantRoute = require("./routes/mutantRoute");
const statsRoute = require("./routes/statsRoute");
 
//CONNECT TO MONGODB
mongoose.connect( process.env.MONGODB_URI, (err, res) => {
    if (err) return console.log("Error de conexion");
    server.listen(port, function () {
      console.log("Servidor corriendo en puerto " + port);
      swaggerDocs(app, port);
    });

  }
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(function (err, req, res, next) {
  if (err) {
    res.status(400).send('El cliente no envio un Json');
  } else {
    next();
  }
})
app.use(cors());

//USE ROUTES
app.use("", mutantRoute);
app.use("", statsRoute  );

module.exports = app;
