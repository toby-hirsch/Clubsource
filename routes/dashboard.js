const express = require('express');
const router = express.Router();
const {Club, validate} = require('../schemas/club');
const { Impression } = require('../schemas/impression');
const Converter = require('quill-delta-to-html').QuillDeltaToHtmlConverter;
const sizeof = require('object-sizeof');


const invalidUsernameError = 'Please enter a valid username. Valid usernames should be at least five characters and not include any white space.';
const duplicateUsernameError = 'Username taken';
const genericError = 'There was an error processing your club. Check that you filled out all fields properly and try again.';
const payloadError = function(mb){
	return 'Your page is ' + mb + ' MB. The limit is 5MB. This is most likely due to a large number of images. Try removing some and resubmitting.';
}

router.get('/', (req, res) => {
	Club.findOne({leader: req.clubowner}, function(err, club){
		if (club){
			var display = club;
			display.description = new Converter(JSON.parse(display.description), {}).convert();
			//console.log(display.description);
			console.log('sending club');
			let today = new Date(Date.now());
			let year = today.getFullYear();
			let month = today.getMonth();
			let start = new Date(year, month - 1, 1);
			let monthbreak = new Date(year, month, 0);
			Impression.find({ page: club._id, timestamp : { $gte : start, $lt : today } }, (err, impressions) => {
				let uniquelast = [];
				let uniquethis = [];
				let countlast = 0;
				let countthis = 0;
				for (view of impressions){
					if (view.timestamp < monthbreak){
						if (uniquelast.indexOf(view.ip)===-1)
							uniquelast.push(view.ip);
						countlast++;
					}
					else {
						console.log(uniquethis);
						console.log(view.ip);
						if (uniquethis.indexOf(view.ip)===-1)
							uniquethis.push(view.ip);
						countthis++;
					}
				}
				let engagement = {
					current: {
						unique: uniquethis.length,
						total: countthis
					},
					last: {
						unique: uniquelast.length,
						total: countlast
					}
				}
				res.render('dashboard', {
					club: club,
					engagement: engagement
				});
				
			});
			
		}
		else{
			console.log('no club found');
			res.render('dashboard');
		}
	});
	
});

router.get('/edit', (req, res) => {
	Club.findOne({leader: req.clubowner}, function(err, club){
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
		
	var newclub = {
		name: req.body.clubname,
		username: req.body.username,
		leader: req.clubowner,
		officers: req.body.officers,
		meetingdates: req.body.meetingdates,
		description: req.body.description,
		tags: req.body.tags
	}
	
	let size = sizeof(newclub);
	
	if (size > 5000000)
		return res.render('clubedit', {
			error: payloadError(size / 1000000.0),
			formData: JSON.stringify(newclub)
		});
	
	console.log('Size: ' + size);
	
	
	
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
	
	Club.findOneAndUpdate({leader: req.clubowner}, newclub, {upsert: true, 'new': true}, function(err, club){
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
		res.redirect('../../clubs/' + req.body.username); 
	});
});

module.exports = router;