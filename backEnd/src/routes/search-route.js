const express = require('express')
const router = express.Router()
const controller = require("../controller/search-controller")


/**
@route LISTAR um evento específico 
@desc Retorna os eventos de uma busca específica no site 
@access Public 
@endpoint http://localhost:8080/search 
**/
router.get('/', controller.findForCategory)



module.exports = router