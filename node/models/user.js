"use strict";

const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email_address: String,
    password: String,
    city: String,
    area: String,
    rank: String,
    //availability: '',
    profile_pic: String,
    school: String
});

let User = mongoose.model('User', userSchema);

module.exports = User;