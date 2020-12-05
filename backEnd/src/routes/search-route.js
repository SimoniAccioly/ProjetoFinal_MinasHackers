const express = require('express')
const router = express.Router()
const controller = require("../controller/search-controller")
const { route } = require('./index-route')

router.get('/:category', controller.findForCategory)


module.exports = router