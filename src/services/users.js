const User = require('../models/User')
const { encryptPassword } = require('./utils/encrypt')
const repository = require('../repositories/users')
const { createToken } = require('./utils/jwt')

const create = async (data) => {

    const userFound = await repository.getOne({ cpf: data.cpf })

    if (userFound.id) {
        throw { status: 409, message: 'User already exists' }
    }

    const user = new User({
        ...data,
        id: undefined,
        created_at: undefined,
        updated_at: undefined
    })

    const { salt, encryptedPassword: password } = encryptPassword(data.password)

    console.log(salt, password)

    const id = await repository.create({ ...user, password, salt })

    const created = await repository.getOne({ id: id })

    return created.view()
}

const login = async loginData => {
    const user = await repository.getOne({ cpf: loginData.cpf })
    if (!user) {
        throw { status: 401, message: 'Not authorized' }
    }
    const { encryptedPassword } = encryptPassword(loginData.password, user.salt)
    if (encryptedPassword !== user.password) {
        throw { status: 401, message: 'Not authorized' }
    }
    const token = createToken(user.id)
    return {
        user: user.view(),
        token
    }
}

const forgot = async (data) => {
    console.log('Caiu no service')
    const userFound = await repository.getOne({ cpf: data.cpf })

    if (!userFound.id) {
        throw { status: 409, message: 'User not exists' }
    }

    const { salt, encryptedPassword: password } = encryptPassword("123")

    const id = await repository.update(userFound.id, { password, salt })

    const created = await repository.getOne({ id: id })

    return created.view()
}

const change = async (data, id) => {

    const user = await repository.getOne({ id: id })
    const { encryptedPassword } = encryptPassword(data.currentPassword, user.salt)

    if (encryptedPassword !== user.password) {
        throw { status: 409, message: 'Precondition Failed' }
    } else {
        const { salt, encryptedPassword: password } = encryptPassword(data.newPassword)
        await repository.change(user.id, { password, salt })
    }
}

const getById = async (id, internalRepository = repository) => {
    const user = await internalRepository.getOne({ id: id })
    if (!user.id) {
        throw { status: 404, message: 'Not Found' }
    }
    return user
}

module.exports = {
    create,
    login,
    forgot,
    change,
    getById
}