const { Router } = require('express')
const router = new Router()
const controller = require('../controllers/equipments')
const authenticate = require('./middlewares/authenticate')

const routerName = '/equipments'

router.get(`${routerName}/:id`, controller.getById );

module.exports = router;