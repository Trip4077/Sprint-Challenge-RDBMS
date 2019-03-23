const express = require('express');
const router = express.Router();

const db = require('../helpers/actionHelpers');

router.post('/', (req, res) => {
    const action = req.body;

    if(action.tasks) {
        db.addAction(req.body)
        .then(id => {
            res.status(201).json(id[0]);
        })
        .catch(err => {
            res.status(500).json({ error: err, message: 'Action Could Not Be Added'})
        })
    } else {
        res.status(400).json({ message: "Missing Action Task" })
    }
})

module.exports = router;