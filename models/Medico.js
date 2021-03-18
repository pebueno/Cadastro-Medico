const Medico = (sequelize, DataTypes) => {
    return sequelize.define('Medico', {
      nome: DataTypes.STRING,
      crm: DataTypes.INTEGER,
      telefonefixo: DataTypes.INTEGER,
      telefonecelular: DataTypes.INTEGER,
      cep: DataTypes.INTEGER,
      especialidade: DataTypes.STRING,
    }
    // ,
    // {
    //   paranoid: true
    // }
    );
  };
  module.exports = Medico;