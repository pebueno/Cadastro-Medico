const medicos = require("../controllers/medico.controller.js");
const getCepInfo = require("../controllers/cep.controller.js");
const { correiosBrasil } = require("correios-brasil");

module.exports = app => {
//POST
app.post("/post-medico-details",medicos.postmedicodetails);
app.post('/', (req, res) => {
    correios.consultarCep({ cep: res.body.cep }, (err, result) => {
        return res.json(result)
    })
})

//FIND
app.post("/get-medico-details",medicos.getmedicodetails);
app.post("/:cep", getCepInfo.getCepInfo);

//UPDATE
 app.post("/update-details",medicos.updatedetails);

//DELETE
app.post("/delete-details",medicos.deletedetails);

};