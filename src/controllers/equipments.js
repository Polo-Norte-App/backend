const services = require('../services/equipments')
const Equipment = require('../models/Equipment')
const handleError = require('./handleError')

const getById = (req, res) => {
    services
        .getById(req.params.id)
        .then((equipment) => res.json(equipment))
        .catch((error) => handleError(res, error))
};

module.exports = {
    getById, }