'use strict';

const User = require('./models/user');

let users = [
    {
        first_name: 'carlton',
        last_name: 'francis',
        user_name: 'franciscarlton',
        email_address: 'cj@spotflare.com',
        password: 'test',
        full_address: '2832 SW Ann Arbor Rd, Port St Lucie, FL 34953, USA',
        lat: 27.258533,
        lng: -80.35206199999999,
        city: "Port Saint Lucie",
        state: "FL",
        zip_code: "34953",
        rank: "blue",
        school: 'Pedro Carvalho Brazilian Jiu Jitsu'
    },
    {
        first_name: 'joshua',
        last_name: 'anderson',
        user_name: 'andersonjoshua',
        email_address: 'cj+joshuaanderson@spotflare.com',
        password: 'test',
        full_address: '658 SW Dalton Cir, Port St Lucie, FL 34953, USA',
        lat: 27.259914,
        lng: -80.368387,
        city: "Port Saint Lucie",
        state: "FL",
        zip_code: "34953",
        rank: "white"
    },
    {
        first_name: 'roger',
        last_name: 'bayless',
        user_name: 'baylessroger',
        email_address: 'cj+rogerbayless@spotflare.com',
        password: 'test',
        full_address: '4253 SW Callicoe St, Port St Lucie, FL 34953, USA',
        lat: 27.22043,
        lng: -80.3580549,
        city: "Port Saint Lucie",
        state: "FL",
        zip_code: "34953",
        rank: "white"
    }
];

users.forEach(function (user, index) {
    User.find({ 'user_name': user.user_name }, function(err, user) {
        if (err) console.log(err);
        if (!err && !user.length) {
            User.create(users[index]);
        }
    });
});
