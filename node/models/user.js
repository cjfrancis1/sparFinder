"use strict";

const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    user_name: String,
    email_address: String,
    password: String,
    full_address: String,
    lat: Number,
    lng: Number,
    city: String,
    state: String,
    zip_code: String,
    area: String,
    rank: String,
    availability: Array,
    profile_pic: String,
    school: String
});

let User = mongoose.model('User', userSchema);

module.exports = User;