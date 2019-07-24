const express = require('express')
const controller = require('../controller/spoiler')

const router = express.Router();

Router.get('/spoilers/:id',controller.buscarum);
Router.get('/spoilers',controller.buscarTodos);
Router.post('/spoilers',controller.criar);
Router.put('/spoilers/:id',controller.atualizar);
Router.delete('/spoilers/:id',controller.excluir);

module.exports = router;