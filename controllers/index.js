const { request } = require('express');

const medicosController = require('./medicosController');

module.exports = {
  medicos: medicosController,
};