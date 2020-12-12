const express = require('express')
const router = express.Router()
const controller = require("../controller/events-controller")

/**
@route LISTAR todos os eventos 
@desc Retorna todos os eventos cadastrados no banco de dados 
@access Public 
@endpoint http://localhost:8080/events
**/
router.get('/',  controller.getAll)

/**
@route CRIAR um evento 
@desc cadastra um evento novo no banco de dados 
@access Public 
@endpoint http://localhost:8080/events/create 
**/
router.post('/create', controller.adEvent)

/**
@route ATUALIZAR um evento 
@desc Atualiza qualquer chave de um evento já cadastrado no banco de dados pelo se id. 
@access Public 
@endpoint http://localhost:8080/events/:id 
**/
router.patch('/:id', controller.updateEvent)

/**
@route DELETAR evento 
@desc Deleta um evento cadastrado no banco de dados pelo seu id 
@access Public 
@endpoint http://localhost:8080/events/:id 
**/
router.delete('/:id', controller.deletEvent)



module.exports = router