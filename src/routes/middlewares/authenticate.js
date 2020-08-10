const jwt = require('../../services/utils/jwt')
const userService = require('../../services/users')
const handleError = require('../../controllers/handleError')

const authenticate = (req, res, next) => {
    try {
        const authorization = req.headers.authorization
        if (!authorization) {
            res.status(403).json({ status: 403, message: "Forbidden" })
        }

        const parts = authorization.split(' ')
        const token = parts[1]
        const { id } = jwt.verifyToken(token)
        const user = userService.getById(id)

        if (!user) {
            res.status(403).json({ status: 403, message: 'Forbidden' })
        }
        req.user = user
        next()
    } catch (error) {
        handleError(res, error)
    }
}
module.exports = authenticate