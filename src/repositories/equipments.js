const knex = require('../../database');

const tableName = 'equipments';

const getById = (id) => {
    return knex(tableName)
        .where({ id: id })
        .then((equipment) => equipment)
};

module.exports = {
    getById,
}