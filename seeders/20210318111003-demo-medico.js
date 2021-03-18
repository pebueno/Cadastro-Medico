module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Medicos', [{
      nome: "Pedro",
      crm: "22.333.22",
      telefonefixo: 43625522,
      telefonecelular: 986645522,
      cep: "09618-040",
      especialidade:  "CIRURGIA DE TÓRAX e CARDIOLOGIA INFANTIL",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Medicos', null, {});
  }
};
