const express = require('express');
const router = express.Router();
const { Club } = require('../schemas/club');
const { User } = require('../schemas/user');
const { Ad } = require('../schemas/ad');
const { Impression } = require('../schemas/impression');
const Converter = require('quill-delta-to-html').QuillDeltaToHtmlConverter;
const qs = require('qs');


router.get('/getdefault', function(req, res){
	let status = 'not signed in';
	Ad.aggregate([{ $sample: { size: 2 } }]).exec(function(err, ads){
		Impression.create({ sess: req.session.id, ads: [ ads[0]._id, ads[1]._id ] }, (err, impression) => {
			if (err){
				console.error(err);
				res.json(err);
			}
			console.log(impression);
		});
		if (req.user){
			User.findOne({email: req.user}, {interests: true}, function(err, user){
				if (user && user.interests)
					Club.find({$text: {$search: user.interests.join(' '), $language: 'english'}}, {name: true, username: true, tags: true}, function(err, clubs){
						res.json({
							clubs: clubs,
							ads: ads,
							status: 'good'
						});
						
					});
				else
					status = 'not configured'
			});
		}
		else 
			Club.find({}, {username: true, name: true, tags: true}, function(err, clubs){
				console.log(clubs);
				res.json({
					clubs: clubs,
					ads: ads,
					status: status
				});
					
			});
	});
	
});


router.get('/search/:search', function(req, res) {
	//console.log(req.params.search);
	var parsed = qs.parse(req.params.search);
	//parsed.shift();
	//console.log(parsed);
	
	Club.find({$text: {$search: parsed.search, $language: 'english'}}, {name: true, username: true, tags: true}).limit(10).exec(function(err, clubs) {
		//console.log(clubs);
		let arr = [];
		for (club of clubs)
			arr.push(club);
		Ad.aggregate([{ $sample: { size: 2 } }]).exec(function(err, ads){
			/*for (ad of ads){
				ad.img = ad.img.toString('base64');
				//console.log(ad);
			}
			if (ads[0]._id.equals(ads[1]._id))
				console.log('**********************************Non-unique result*************************************');*/
			Impression.create({ sess: req.session.id, ads: [ ads[0]._id, ads[1]._id ] }, (err, impression) => {
				if (err){
					console.error(err);
					res.json(err);
				}
				console.log(impression);
			});
			res.json({
				clubs: arr,
				ads: ads
			});
			
		});
		
	});
	
});

router.get('/:username', function(req, res) {
	var username = req.params.club;
	console.log('Received request with username ' + req.params.username);
	Ad.aggregate([{ $sample: { size: 2 } }]).exec(function(err, ads){
		Club.findOne({username: req.params.username}, function(err, club){
			Impression.create({ sess: req.session.id, ads: [ ads[0]._id, ads[1]._id ], page: club._id }, (err, impression) => {
				if (err){
					console.error(err);
					res.json(err);
				}
				console.log(impression);
			});
			if (err) {
				console.log(err.message);
				res.json(err);
			} //Change before deploying
			if (club===null){
				res.json('not found');
				res.status(404);
			}
			club.description = new Converter(JSON.parse(club.description), {}).convert();
			
			let isowner = false;
			if (req.clubowner)
				if (club.leader===req.clubowner)
					isowner = true;
					
			if (req.user) {
				console.log(club._id);
				User.findOne({email: req.user, subscriptions: club._id}, function(err, user){
					if (err) {
						console.log(err.message);
						res.json(err);
					}
					let subscribed = false;
					if (user)
						subscribed = true;
					res.json({
						club: club,
						subscribed: subscribed,
						isowner: isowner,
						ads: ads
					});
					
				});
			}
			else 
				res.json({
					club: club,
					subscribed: false,
					isowner: isowner,
					ads: ads
				});
				
			
		});
	});
});

router.post('/subscribe', function(req, res){
	if (req.body.adding)
		User.update({email: req.user}, {$push: {subscriptions: req.body.club}}, function(err, user){
			if (err){
				console.log(err.message);
				res.json(err);
			}
			res.json(user);
		});
		
	else
		User.update({email: req.user}, {$pull: {subscriptions: req.body.club}}, function(err, user){
			if (err){
				console.log(err.message);
				res.json(err);
			}
			res.json(user);
		});
});


module.exports = router;