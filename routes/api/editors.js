var express = require('express');
var router = express.Router();

/**
 * GET all editors (with pagination)
 */
router.get('/', function (req, res, next) {
    res.status(200);
    var limit = typeof req.query.limit == "undefined" ? 10 : parseInt(req.query.limit);
    var page = typeof req.query.page == "undefined" ? 1 : parseInt(req.query.page);
    res.json({
        message: "GET all editors",
        limit: limit,
        page: page
    });
});

/**
 *  GET single editor
 */
router.get('/:id', function (req, res, next) {
    res.status(200);
    var id = req.params.id;
    res.json({
        message: "GET editor with id: " + id
    });
});

module.exports = router;
