const express = require('express')
const router = express.Router()
const controller = require("../controller/events-controller")
const { route } = require('./index-route')

router.get('/',  controller.getAll)


module.exports = router