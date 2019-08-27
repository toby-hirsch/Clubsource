const express = require('express');
const router = express.Router();
const { User } = require('../schemas/user');

router.get('/user', function(req, res){
	if (req.session.token && req.user) {
		res.cookie('token', req.session.token);
		User.findOneAndUpdate({email: req.user}, {email: req.user}, {upsert: true, populate: 'subscriptions', new: true}, (err, profile) => {
			if (err){
				console.error(err.message);
				res.json(err);
			}
			console.log('returning profile');
			console.log(profile);
			res.json(JSON.stringify(profile));
		});
    } else {
		res.cookie('token', '');
		res.json('');
    }
});

router.post('/updatetags', function(req, res){
	console.log('updating tags');
	console.log(req.body);
	if (!req.user)
		return res.json('not signed in');
	console.log('tag update request data:');
	console.log(req.body);
	console.log(typeof req.body);
	let tags = req.body;
	User.findOneAndUpdate({email: req.user}, {interests: tags}, {upsert: true, new: true}, function(err, user){
		if (err) {
			console.log(err.message);
			res.json(err);
		}
		console.log('updated object');
		console.log(user);
		res.json(user.interests);
	});
});

module.exports = router;