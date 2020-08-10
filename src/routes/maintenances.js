const { Router } = require('express')
const router = new Router()
const controller = require('../controllers/maintenances')
const authenticate = require('./middlewares/authenticate')

const routerName = '/maintenances'

router.post(routerName, authenticate, controller.create)

module.exports = router;