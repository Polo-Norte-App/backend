const repository = require('../repositories/maintenances')

const create = async (maintenance) => {
    const id = await repository.create(maintenance);
    const created = await repository.getById(id);
    return created
};

module.exports = {
    create,
}