module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Medicos', [{
      nome: "Raquel",
      crm: 2244433,
      telefonefixo: 43625522,
      telefonecelular: 986645522,
      cep: 98510020,
      especialidade:  "CARDIOLOGIA INFANTIL",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: "Pedro",
      crm: 5544433,
      telefonefixo: 43625522,
      telefonecelular: 986645522,
      cep: 38510020,
      especialidade:  "CIRURGIA DE TÓRAX",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: "Bruno",
      crm: 5544433,
      telefonefixo: 43625522,
      telefonecelular: 986645522,
      cep: 28510020,
      especialidade:  "CIRURGIA CARDÍACA",
      createdAt: new Date(),
      updatedAt: new Date()
    }    
  ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Medicos', null, {});
  }
};
