const { Router } = require('express')
const router = new Router()
const controller = require('../controllers/users')
const authenticate = require('./middlewares/authenticate')

const routeName = '/users'

router.post(`${routeName}/login`, controller.login)

router.post(`${routeName}/create`, controller.create)

router.post(`${routeName}/forgot-password`, controller.forgot)

router.post(`${routeName}/change-password`, authenticate, controller.change)

module.exports = router;