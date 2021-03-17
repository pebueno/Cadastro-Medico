const express = require("express");
// const bodyParser = require("body-parser");
const Sequelize = require('sequelize');
const mysql = require('mysql2');

const app = express();

//Conexao com BD MySQL

const sequelize = new Sequelize('test', 'pedroivo', '123456', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate().then(function () {
  console.log('Conexão realizada com sucesso');
}).catch(function (err) {
  console.log('Erro ao realizar a conexão com BD: ' + err);
});

const Pagamento = sequelize.define('pagamentos', {
  nome: {
      type: Sequelize.STRING,
  },
  valor: {
      type: Sequelize.DOUBLE
  }
});

// Pagamento.sync({force: true});

Pagamento.create({
  nome: "Energia",
  valor: 220
});

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function(){
    console.log("Servidor rodando em http://localhost:3000");
});


