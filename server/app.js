const cors = require("cors");
// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

// Handles the handlebars
// https://www.npmjs.com/package/hbs
//const hbs = require("hbs");

const app = express();

// allow access to the API from different domains/origins
app.use(cors({
    // this could be multiple domains/origins, but we will allow just our React app
    origin: [ "http://localhost:3000" ]
  }));

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);
require("./config/session.config")(app)
require("./config/cors.config")(app);


// 👇 Start handling routes here
// const index = require("./routes/index");
// app.use("/", index);
const allRoutes = require("./routes");
app.use("/api", allRoutes);
app.use('/api', require('./routes/file-upload-routes'));


// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
