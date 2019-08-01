const express = require('express');
const router = express.Router();
const {Club, validate} = require('../schemas/club');
const Converter = require('quill-delta-to-html').QuillDeltaToHtmlConverter;


const invalidUsernameError = 'Please enter a valid username. Valid usernames should be at least five characters and not include any white space.';
const genericError = 'There was an error processing your club. Make sure that you have filled out all fields with at least five characters.';

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
	
	if (!validateUsername(req.body.username)) {
		req.body.username = '';
		res.render('clubedit', {
			error: invalidUsernameError,
			formData: JSON.stringify(req.body)
		});
	}
	var newclub = {
		name: req.body.clubname,
		username: req.body.username,
		leader: req.user.profile.login,
		officers: req.body.officers,
		meetingdates: req.body.meetingdates,
		description: req.body.description,
		tags: req.body.tags
	}
	if (!validate(newclub)){
		res.render('clubedit', {
			error: genericError,
			formData: JSON.stringify(req.body)
		});
	}
	console.log('club to be added: ');
	console.log(newclub);
	
	//Upsert newclub object
	
	Club.findOneAndUpdate({leader: req.user.profile.login}, newclub, {upsert: true, 'new': true}, function(err, club){
		if (err) throw err;
		console.log('club after update: ');
		console.log(club);
		res.redirect('../../clubs/' + req.body.username); 
	});
});


function validateUsername(username){
	return !username.match(/^[!#$&-;=?-[]_a-z~]+$/) && username.length > 4;
	//Maybe take a more detailed look at this; probably don't want ? and / in usernames
}


module.exports = router;