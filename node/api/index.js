'use strict';

const express = require('express'),
    router = express.Router(),
    api_helper = require('../../helpers/api_helper'),
    User = require('../models/user');

router.get('/users', function (req, res) {
    (function () {
        return new Promise((resolve, reject) => {
            User.find({}, function(err, users) {
                if (err) {
                    reject(err);
                } else {
                    resolve(users)
                }
            });
        })
    })()
        .then((users) => {
            return res.json(api_helper.template({status: 200, errors: false, response: users, recordCount: true}));
        })
        .catch((err) => {
            res.json(api_helper.template({status: 500, errors: [err]}));
        });
});

module.exports = router;