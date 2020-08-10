const knex = require('../../database')
const User = require('../models/User')
const tableName = 'users'

const create = async user => {
    const [id] = await knex(tableName).returning('id').insert(user)
    return id
}

const update = async (id, user) => {
    await knex(tableName).returning('id').update(user).where({id})
    return id
}

const change = async (id, user) => {
    await knex(tableName).returning('id').update(user).where({id})
    return id
}

const getOne = async filter => {
    const [user] = await knex(tableName).where(filter)
    return new User(user)
}




module.exports = {
    create,
    update,
    change,
    getOne
}