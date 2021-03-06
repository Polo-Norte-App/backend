exports.up = function (knex) {
    return knex.schema.createTable('equipments', (table) => {
        table.increments();
        table.string('model').notNull();
        table.string('brand').notNull();
        table.integer('year').notNull();
        table
            .integer('store_id')
            .notNull()
            .references('stores.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        table.timestamps();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('equipments');
};