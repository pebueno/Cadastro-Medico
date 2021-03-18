const { consultarCep } = require("correios-brasil");

module.exports = {
  async getCepInfo(req, res) {
    try {
      consultarCep(req.params.cep).then((response) => {
        return res.status(200).send(response);
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  },
};