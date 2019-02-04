const express = require('express'),
    mongoose = require('mongoose'),
    schema = mongoose.Schema;

// ========== Defining the Hotel Schema ============ 
const HotelSchema = new schema({

});

const Hotel = module.exports = mongoose.model('Hotel', HotelSchema);

// ========== Defining the Hotel Methods ============ 
