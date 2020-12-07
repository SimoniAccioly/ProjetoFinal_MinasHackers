const express = require('express')
const router = express.Router()
const controller = require("../controller/search-controller")


router.get('/:category', controller.findForCategory)
router.get('/:name', controller.findForCategory)
router.get('/:date', controller.findForDate)
router.get('/:theme', controller.findForTheme)
router.get('/:cost', controller.findForCost)
router.get('/:subcategory', controller.findForSubcategory)


module.exports = router