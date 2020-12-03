const express = require('express')
const router = express.Router()
const controller = require("../controller/events-controller")
const { route } = require('./index-route')

router.get('/',  controller.getAll)
router.post('/create', controller.adEvent)
router.patch('/:id', controller.updateEvent)
router.delete('/:id', controller.deletEvent)
router.get('/:category', controller.findForCategory)


module.exports = router