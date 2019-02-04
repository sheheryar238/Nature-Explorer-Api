const express = require('express'),
    router = express.Router(),
    User = require('../models/userModel');

router.get('/', (req, res) => {
    res.send('');
});

module.exports = router;