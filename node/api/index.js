'use strict';

const express = require('express'),
    router = express.Router(),
    User = require('../models/user');

router.get('/users', function (req, res) {
    User.find({}, function(err, users) {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.json({ users: users});
    });
});

module.exports = router;