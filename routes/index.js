var express = require('express');
var router = express.Router();

router.get('/',function(req, res, next) {
	// body...
	res.status(200);
	res.render('index');
});

router.get('/signup',function(req, res, next) {
	// body...
	res.status(200);
	res.render('signup');
});

module.exports = router;
