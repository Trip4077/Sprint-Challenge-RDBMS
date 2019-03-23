const express = require('express');
const router = express.Router();

const db = require('../helpers/projectHelpers');

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

module.exports = router;