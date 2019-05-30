var express = require('express');
var router = express.Router();

// GET users listing
router.get('/', function (req, res, next) {
    console.log('get route for test called');
    res.json([{ id: 1, title: 'Testing' }, { id: 2, title: 'Get React to interfere with Express' }]);
});

module.exports = router;
