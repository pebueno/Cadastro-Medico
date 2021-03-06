module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Medicos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },      
      crm: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      telefonefixo: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      telefonecelular: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      cep: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      especialidade: {
        type: Sequelize.STRING,
        allowNull: false,
      },                  
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },      
    });
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Medicos');
  }
};
