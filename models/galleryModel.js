const express = require('express'),
    mongoose = require('mongoose'),
    schema = mongoose.Schema;

// ========== Defining the Gallery Schema ============ 
const GallerySchema = new schema({

});

const Gallery = module.exports = mongoose.model('Gallery', GallerySchema);

// ========== Defining the Gallery Methods ============ 
