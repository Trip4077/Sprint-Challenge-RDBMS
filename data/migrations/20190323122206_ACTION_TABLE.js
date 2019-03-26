
exports.up = function(knex, Promise) {
    return knex.schema.createTable('action', tbl => {
        tbl.increments();
        
        tbl.string('tasks').notNullable();
        tbl.string('notes');

        tbl.boolean('done').notNullable().defaultTo(false);

        tbl.integer('project_id')
           .references('id')
           .inTable('project')
           .onDelete('CASCADE')
           .onUpdate('CASCADE')
           .notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('action');
};
