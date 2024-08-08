const express = require('express');
const router = express.Router();
const Paper = require('../models/Paper');

router.post('/approve', async (req, res) => {
    const { hash } = req.body;
    try {
        const paper = await Paper.findOne({ hash });
        if (paper) {
            paper.approved = true;
            await paper.save();
            res.status(200).send('Paper approved');
        } else {
            res.status(404).send('Paper not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
