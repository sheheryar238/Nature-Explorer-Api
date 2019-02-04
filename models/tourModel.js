const express = require('express'),
    mongoose = require('mongoose'),
    schema = mongoose.Schema;

// ========== Defining the Tour Schema ============ 
const TourSchema = new schema({
    name: {
        type: String,
        required: true
    },
    short_description: {
        type: String,
        required: true
    },
    long_description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    pricePerNight: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    }
});

const Tour = module.exports = mongoose.model('Tour', TourSchema);

// ========== Defining the Tour Methods ============ 
module.exports.findTourById = (id, callback) => {
    Tour.findById(id, callback);
};

module.exports.findTours = (callback, limit) => {
    Tour.find(callback).limit(limit);
};