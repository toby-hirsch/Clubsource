const express = require("express");
const router = express.Router();
const { Ad } = require('../schemas/ad');

router.get('/', (req, res, next) => {
	if (req.clubowner !== 'toby5252@gmail.com')
		next();
	else
		res.render('adupload');
});

router.post('/', (req, res) => {
	//let data = JSON.parse(req.body);
	let data = req.body.img.split(',');
	//console.log(data.substring(0, 50));
	Ad.create({img: Buffer.from(data[1], 'base64'), prefix: data[0], url: req.body.url}, (err, ad) => {
		let encoding = ad.img.toString('base64');
		res.json({
			prefix: ad.prefix,
			url: ad.url,
			img: encoding
		});
	});
});

module.exports = router;