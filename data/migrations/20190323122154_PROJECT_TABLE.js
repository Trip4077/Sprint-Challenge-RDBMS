
exports.up = function(knex, Promise) {
    return knex.schema.createTable('project', tbl => {
        tbl.increments();
        
        tbl.string('name').notNullable();
        tbl.string('description')

        tbl.boolean('complete').notNullable().defaultTo(false);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('project')
};
