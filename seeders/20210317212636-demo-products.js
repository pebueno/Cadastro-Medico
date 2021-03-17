module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
      name: "Raquel",
      description: "Blablablalba",
      salary: 220,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Pedro",
      description: "Tersadasda",
      salary: 500,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
