const { Router } = require('express')
const users = require('./users');
const equipments = require('./equipments');
const maintenances = require('./maintenances')

const router = new Router();

router.use(users);
router.use(equipments);
router.use(maintenances);

router.use((req, res, next) => {
    const err = new Error('Not Found')
    err.status = 404
    next(err);
})

module.exports = router;