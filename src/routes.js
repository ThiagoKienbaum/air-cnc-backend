const express = require('express');
const multer = require('multer');
const uploadConfig = require('./Config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');

const routes = express.Router();
const upload = multer(uploadConfig);

//req.query  = acessar query params (para filtros)
//req.params = acessar rout params (para edição e delete)
//req.body = acessar o corpo da requisição (para criação e edição)

routes.post('/sessions', SessionController.store);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);

//exporta o routes para o app
module.exports = routes;