const medicos = require("../controllers/medico.controller.js");
module.exports = app => {
//POST
app.post("/post-medico-details",medicos.postmedicodetails);

//FIND
app.post("/get-medico-details",medicos.getmedicodetails);

//UPDATE
 app.post("/update-details",medicos.updatedetails);

//DELETE
app.post("/delete-details",medicos.deletedetails);

};