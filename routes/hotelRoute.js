const express = require('express'),
    router = express.Router(),
    Hotel = require('../models/hotelModell');

router.get('/', (req, res) => {
    res.send('');
});

module.exports = router;