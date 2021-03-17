module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Pessoa', {
      name: Sequelize.DataTypes.STRING,
      isBetaMember: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      pagamentoId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'pagamentos',
            schema: 'schema'
          },
          key: 'id'
        },
        allowNull: false
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Pessoa');
  }
}
