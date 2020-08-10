const services = require('../services/maintenances')
const Maintenance = require('../models/Maintenance')
const handleError = require('./handleError')

const create = async (req, res) => {
    try {
        const maintenance = new Maintenance (req.body);
        if (!maintenance.description || !maintenance.equipment_id || !maintenance.user_id) {
            throw { status: 400, message: "Invalid data" };
        }
        const created = await services.create(maintenance);
        res.status(201).json(created);
    } catch (error) {
        handleError(res, error);
    }
};

module.exports = {create,
}