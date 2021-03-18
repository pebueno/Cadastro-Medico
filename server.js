const express = require("express");
const bodyParser = require("body-parser");
const Sequelize = require('sequelize');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
require("./app/routes/medico.routes.js")(app);
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}.`);
})