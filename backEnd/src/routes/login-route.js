const express = require('express')
const router = express.Router()
const controller = require("../controller/login-controller")

/**
@route CRIAR um novo usuário 
@desc cadastra um novo usuário no banco de dados 
@access Public 
@endpoint http://localhost:8080/login 
**/
router.post('/', controller.login)

module.exports = router