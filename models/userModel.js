const express = require('express'),
    mongoose = require('mongoose'),
    schema = mongoose.Schema;

// ========== Defining the User Schema ============ 
const UserSchema = new schema({

});

const User = module.exports = mongoose.model('User', UserSchema);

// ========== Defining the User Methods ============ 
