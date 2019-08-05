const express = require('express');
const router = express.Router();
const {Club, validate} = require('../schemas/club');
const Converter = require('quill-delta-to-html').QuillDeltaToHtmlConverter;


const invalidUsernameError = 'Please enter a valid username. Valid usernames should be at least five characters and not include any white space.';
const duplicateUsernameError = 'Username taken';
const genericError = 'There was an error processing your club. Check that you filled out all fields properly and try again.';

router.get("/", (req, res) => {
	console.log(req.user.credentials.provider.name);
	Club.findOne({leader: req.user.profile.login}, function(err, club){
		if (club){
			var display = club;
			display.description = new Converter(JSON.parse(display.description), {}).convert();
			console.log(display.description);
			res.render("dashboard", {
				club: JSON.stringify(club),
				engagement: 'no'
			});
		}
		else
			res.render('dashboard');
	});
	
});

router.get('/edit', (req, res) => {
	Club.findOne({leader: req.user.profile.login}, function(err, club){
		if (club)
			res.render('clubedit', {
				formData: JSON.stringify(club)
			});
		else
			res.render('clubedit');
	});
});

router.post('/edit', (req, res, next) => {
	
	//Validate submitted data -- need to flesh this out more
	
	//TODO: use Object.bsonsize() to make sure that documents don't exceed 2MB
	
	var newclub = {
		name: req.body.clubname,
		username: req.body.username,
		leader: req.user.profile.login,
		officers: req.body.officers,
		meetingdates: req.body.meetingdates,
		description: req.body.description,
		tags: req.body.tags
	}
	
	console.log('validation errors:');
	let result = validate(newclub);
	console.log(result.error);
		
	if (result.error){
		return res.render('clubedit', {
			error: genericError,
			formData: JSON.stringify(newclub)
		});
	}
	//console.log('club to be added: ');
	//console.log(newclub);
	
	//Upsert newclub object
	
	Club.findOneAndUpdate({leader: req.user.profile.login}, newclub, {upsert: true, 'new': true}, function(err, club){
		if (err) {
			if (err.message.includes('E11000 duplicate key error')){
				newclub.username = '';
				res.render('clubedit', {
					error: duplicateUsernameError,
					formData: JSON.stringify(newclub)
				});
			}
			else
				res.render('clubedit', {
					error: genericError,
					formData: JSON.stringify(newclub)
				});
			return;
		}
		console.log('club after update: ');
		console.log(club);
		res.redirect('../../clubs/' + req.body.username); 
	});
});

module.exports = router;