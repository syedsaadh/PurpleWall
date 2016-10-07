var express = require('express');
var router = express.Router();

router.get('/',function(req, res, next) {
	// body...
	res.status(200);
	res.render('index');
});
module.exports = router;
