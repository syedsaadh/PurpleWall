var express = require('express');
var router = express.Router();

Blog = require('../../models/blog');

/**
 * GET all posts (with pagination)
 */
router.get('/', function (req, res, next) {
    res.status(200);
    var limit = typeof req.query.limit == "undefined" ? 10 : parseInt(req.query.limit);
    var page = typeof req.query.page == "undefined" ? 1 : parseInt(req.query.page);

    Blog.getBlogs(function (err, blogs) {
        if (err) {
            res.send(err);
        } else {
            if (!blogs) {
                next();
            } else {
                res.status(200);
                res.json(blogs);
            }
        }
    }, limit);
});

/**
 *  GET single post
 */
router.get('/:title', function (req, res, next) {
    Blog.getBlogFromURL([req.params.title], function (err, blog) {
        if (err) {
            res.send(err);
        } else {
            if (!blog) {
                next();
            } else {
                res.status(200);
                res.json(blog);
            }
        }
    });


});

router.post('/add', function (req, res, next) {
    var newBlog  = new Blog({
        title: "This is a Sample Blog",
        category: "Sample",
        content: "Doing this just to test mongo",
        author: "Ujjwal Bhardwaj"
    });

    newBlog.save(function (err) {
        if (err) {
            return res.json({
                success: false,
                message: 'Some error.'
            });
        }
        res.json({
            success: true,
            message: 'Blog created Successfully'
        });
    });
});

module.exports = router;