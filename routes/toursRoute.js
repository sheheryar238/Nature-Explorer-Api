const express = require('express'),
    router = express.Router(),
    Tour = require('../models/tourModel');

router.get('/', (req, res) => {
    Tour.findTours((err, tours) => {
        if (err)
            throw err;
        res.json(tours);
    });
});

module.exports = router;