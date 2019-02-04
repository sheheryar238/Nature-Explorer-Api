const express = require('express'),
    router = express.Router(),
    Gallery = require('../models/galleryModel');

router.get('/', (req, res) => {
    res.send('');
});

module.exports = router;