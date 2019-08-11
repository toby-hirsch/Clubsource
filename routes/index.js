var express = require('express');
var router = express.Router();
var path = require('path');
var app = require('../app.js');


/* GET home page. */
router.get('/', function(req, res, next) {
	//res.render('index', { title: 'Express' });
	res.render('clublandingpage');
});

router.get('/:path(clubs|profile)(/*)?', function(req, res) {
	res.sendFile(path.join(__dirname, '../public', 'app.html'));
});

module.exports = router;
