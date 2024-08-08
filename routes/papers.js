const express = require('express');
const router = express.Router();
const Paper = require('../models/Paper');

router.post('/upload', async (req, res) => {
    const { hash, professor } = req.body;
    try {
        const paper = new Paper({ hash, professor });
        await paper.save();
        res.status(201).send('Paper uploaded');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.get('/all', async (req, res) => {
    try {
        const papers = await Paper.find();
        res.status(200).json(papers);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
