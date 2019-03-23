const express = require('express');
const router = express.Router();

const db = require('../helpers/projectHelpers');
const actions = require('../helpers/actionHelpers');

router.post('/', (req, res) => {
    const project = req.body;

    if(project.name) {
        db.addProject(req.body)
        .then(id => {
            res.status(201).json(id[0]);
        })
        .catch(err => {
            res.status(500).json({ error: err, message: 'Project Could Not Be Added'})
        })
    } else {
        res.status(400).json({ message: "Missing Project Name" })
    }
})

router.get('/:id', (req, res) => {
    db.getProjectById(req.params.id)
      .then(project => {
         
        actions.getActionsByProject(project[0].id)
                 .then(actions => {
                     const result = project[0];

                     result.actions = actions;
                     res.status(200).json(result);
                 })
                 .catch(err => {
                    res.status(500).json({ error: err, message: 'Info Could Not Be Found'})
                 }) 

      })
      .catch(err => {
        res.status(500).json({ error: err, message: 'Info Could Not Be Found'})
      })
});

module.exports = router;