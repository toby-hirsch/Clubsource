const express = require('express');
const router = express.Router();
const { Club } = require('../schemas/club');
const { User } = require('../schemas/user');
const Converter = require('quill-delta-to-html').QuillDeltaToHtmlConverter;
const qs = require('qs');


router.get('/getdefault', function(req, res){
	let arr = [];
	Club.find({}, {username: true, name: true, tags: true}, function(err, clubs){
		console.log(clubs);
		res.json(clubs);
	});
});


router.get('/search/:search', function(req, res) {
	console.log(req.params.search);
	var parsed = qs.parse(req.params.search);
	//parsed.shift();
	console.log(parsed);
	
	Club.find({$text: {$search: parsed.search, $language: 'english'}}, {name: true, username: true, tags: true}).limit(10).exec(function(err, clubs) {
		console.log(clubs);
		let arr = [];
		for (club of clubs)
			arr.push(club);
		res.json(arr);
	});
	
});

router.get('/:username', function(req, res) {
	var username = req.params.club;
	console.log('Received request with username ' + req.params.username);
	Club.findOne({username: req.params.username}, function(err, club){
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
		if (req.club)
			if (club.leader===req.user.profile.login)
				isowner = true;
				
		if (req.user) {
			console.log(club._id);
			User.findOne({email: req.user.profile.emails[0].value, subscriptions: club._id}, function(err, user){
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
					isowner: isowner
				});
				
			});
		}
		else 
			res.json({
				club: club,
				subscribed: false,
				isowner: isowner
			});
			
		
	});
});

router.post('/subscribe', function(req, res){
	console.log(req.body);
	console.log(req.user.profile.emails[0].value);
	console.log(req.body);
	if (req.body.adding)
		User.update({email: req.user.profile.emails[0].value}, {$push: {subscriptions: req.body.club}}, function(err, user){
			if (err){
				console.log(err.message);
				res.json(err);
			}
			res.json(user);
		});
		
	else
		User.update({email: req.user.profile.emails[0].value}, {$pull: {subscriptions: req.body.club}}, function(err, user){
			if (err){
				console.log(err.message);
				res.json(err);
			}
			res.json(user);
		});
});


module.exports = router;