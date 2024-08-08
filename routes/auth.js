// src/routes/auth.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
    const { role, name, dob, college, designation, address } = req.body;
    try {
        const user = new User({ role, name, dob, college, designation, address });
        await user.save();
        res.status(201).send('User registered');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
