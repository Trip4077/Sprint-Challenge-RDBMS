const knex = require('knex');
const knexConfig = require('../../knexfile');

const db = knex(knexConfig.development);

module.exports = {

    addProject: project => {
        return db.insert(project)
                 .into('project');
    },

    getProjectById: id => {
        return db('project')
                 .where({ id })
    }
}