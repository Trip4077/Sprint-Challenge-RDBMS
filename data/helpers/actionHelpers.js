const knex = require('knex');
const knexConfig = require('../../knexfile');

const db = knex(knexConfig.development);

module.exports = {

    addAction: action => {
        return db.insert(action)
                 .into('action');
    }

}