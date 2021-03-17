module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Pagamentos', [{
      nome: "Energia",
      valor: 220,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pagamentos', null, {});
  }
};
