const service = require('../services/users');
const handleError = require('./handleError')

const create = async (req, res) => {
    try {
        console.log("body", req.body)
        if (!req.body.name || !req.body.email || !req.body.password || !req.body.cpf) {
            throw { status: 400, message: "Invalid data" }
        }
        const created = await service.create(req.body)
        res.status(201).json(created)
    } catch (error) {
        handleError(res, error)
    }
}
const login = async (req, res) => {
    try {
        if (!req.body.cpf || !req.body.password) {
            throw { status: 400, message: "Invalid data" }
        }
        const data = await service.login(req.body)
        res.json(data)
    } catch (error) {
        handleError(res, error)
    }
}
const forgot = async (req, res) => {
    try {
        console.log('Caiu no controller')
        if (!req.body.cpf) {
            throw { status: 400, message: "Invalid data" }
        }
        const data = await service.forgot(req.body)
        res.status(200).json(data)
    } catch (error) {
        handleError(res, error)
    }
}

const change = async (req, res) => {
    try {
        if (!req.body.currentPassword || !req.body.newPassword) {
            throw { status: 400, message: "Invalid data" }
        }
        const data = await service.change(req.body, req.user.id)
        res.status(200).json(data)
    } catch (error) {
        handleError(res, error)
    }
}
module.exports = {
    create,
    login,
    forgot,
    change
}