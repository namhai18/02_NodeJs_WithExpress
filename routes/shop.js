const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');

// http://localhost:3000/ --> go to Hello from express
// http://localhost:3000/jasdajsd --> also go to Hello from express
router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;