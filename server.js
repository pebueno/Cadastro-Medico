const express = require("express");
const bodyParser = require("body-parser");
const Sequelize = require('sequelize');
const app = express();
app.use(bodyParser.json());
require("./app/routes/medico.routes.js")(app);
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}.`);
})

// http://localhost:7000/post-medico-details