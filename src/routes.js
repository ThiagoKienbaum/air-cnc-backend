const express = require('express');
const SessionController = require('./controllers/SessionController')
const routes = express.Router();

//req.query  = acessar query params (para filtros)
//req.params = acessar rout params (para edição e delete)
//req.body = acessar o corpo da requisição (para criação e edição)

routes.post('/users', SessionController.store);

//exporta o routes para o app
module.exports = routes;