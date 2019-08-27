const express = require("express");
const router = express.Router();
const { Ad } = require('../schemas/ad');
const { Impression } = require('../schemas/impression');
const { Payout } = require('../schemas/payout');
const { Club } = require('../schemas/club');

router.get('/upload', (req, res, next) => {
	if (req.clubowner !== 'toby5252@gmail.com')
		next();
	else
		res.render('adupload');
});

router.post('/upload', (req, res, next) => {
	if (req.clubowner !== 'toby5252@gmail.com')
		next();
	//let data = JSON.parse(req.body);
	let data = req.body.img.split(',');
	//console.log(data.substring(0, 50));
	Ad.create({img: Buffer.from(data[1], 'base64'), prefix: data[0], url: req.body.url, name: req.body.name}, (err, ad) => {
		let encoding = ad.img.toString('base64');
		res.json({
			prefix: ad.prefix,
			url: ad.url,
			img: encoding
		});
	});
});

router.get('/payout', (req, res, next) => {
	if (req.clubowner !== 'toby5252@gmail.com')
		next();
	else
		res.render('adpayout');
});

router.post('/payout', (req, res, next) => {
	if (req.clubowner !== 'toby5252@gmail.com')
		next();
	console.log(req.body);
	let startdate = new Date(req.body.start);
	let enddate = new Date(req.body.end);
	enddate.setDate(enddate.getDate() + 1);
	Impression.find({ timestamp : { $gte : startdate, $lt : enddate }, page: { $exists: true } }, (err, impressions) => {
		if (err){
			console.log(err.message);
			res.json(err);
		}
		let count = impressions.length;
		let clubviews = {};
		let multiplier = 1.0 * req.body.amt / count;
		for (view of impressions)
			if (clubviews[view.page])
				clubviews[view.page] += multiplier;
			else
				clubviews[view.page] = multiplier;
		Payout.updateMany({ latest: true }, { $set: { latest: false } }, (err, payouts) => {
			Payout.create({ 
				start: startdate, 
				end: enddate, 
				amount: req.body.amt, 
				recipients: Object.entries(clubviews).map(([key, value]) => ({ club: key, amount: value })) }, 
				(err, payout) => {
					if (err){
						console.error(err);
						res.json(err);
					}
					res.json(payout);
				}
				
			);
		});
		for (id in clubviews){
			Club.findOneAndUpdate({ _id: id }, { $inc: { balance: clubviews[id] } }, (err, balance) => {
				if (err) {
					console.error(err);
					res.json(err);
				}
				console.log('balance');
				console.log(balance);
			});
		}
	});
});

module.exports = router;