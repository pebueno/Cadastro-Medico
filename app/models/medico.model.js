module.exports = (sql, Sequelize) => {

  const Medico = sql.define('medicos', {
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
      }
 },
 {
    timestamps: false
 });

 return Medico

}