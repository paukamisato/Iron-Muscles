const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const path = require("path");

// Middleware configuration
module.exports = (app) => {
  // app.set("trust proxy", 1);     *se utiliza en el ejmplo de la clase y no se para que

  app.use(logger("dev"));

  // To have access to `body` property in the request
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());

  // Handles access to the public folder
  app.use(express.static(path.join(__dirname, "..", "public"))); //*no lo utiliza en ejemplo profe
};
