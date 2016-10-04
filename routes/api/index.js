var express = require('express');
var router = express.Router();

/**
 * API Home
 */
router.get('/', function (req, res, next) {
    res.status(200);
    res.json({
        name: "PurpleWall API"
    });
});



module.exports = router;
