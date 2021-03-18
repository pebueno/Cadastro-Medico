module.exports = (sql, Sequelize) => {

  const Medico = sql.define('medicos', {
    nome: {
      type: Sequelize.STRING(120),
      allowNull: false,
    },  
    crm: {
      type: Sequelize.STRING(9),
      allowNull: false,
      validate: {
        is: /^\d{2}[-.\s]?\d{3}[-.\s]?\d{2}$/i,
      },
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
        type: Sequelize.STRING(9),
        allowNull: false,
        validate: {
          is: /^\d{5}\-\d{3}$/i,
        },
      },
      especialidade: {
        type: Sequelize.STRING,
        allowNull: false,
      },   
  },
 {
    timestamps: false
 });

 return Medico

}