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

/**
 * GET all posts (with pagination)
 */
router.get('/posts', function (req, res, next) {
    res.status(200);
    var limit = typeof req.query.limit == "undefined" ? 10 : parseInt(req.query.limit);
    var page = typeof req.query.page == "undefined" ? 1 : parseInt(req.query.page);
    res.json({
        message: "GET all posts",
        limit: limit,
        page: page
    });
});

/**
 *  GET single post
 */
router.get('/posts/:id', function (req, res, next) {
    res.status(200);
    var id = req.params.id;
    res.json({
        message: "GET post with id: " + id,
    });
});

/**
 * GET all editors (with pagination)
 */
router.get('/editors', function (req, res, next) {
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
router.get('/editors/:id', function (req, res, next) {
    res.status(200);
    var id = req.params.id;
    res.json({
        message: "GET editor with id: " + id
    });
});

module.exports = router;
