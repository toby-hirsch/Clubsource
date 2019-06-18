const express = require('express');
const router = express.Router();
const {Club, validate} = require('../schemas/club');

router.get("/", (req, res) => {
	res.render("dashboard");
});

router.get('/edit', (req, res) => {
	res.render('clubedit');
});

router.post('/publish', (req, res) => {
	Club.findOne({user: req.user.profile.login}, function(err, club){
		if (err) throw err;
		if (!club)
			Club.create({
				name: req.body.clubname,
				leader: req.user.profile.login,
				description: req.body.description
			}, function(err, data){
				if (err) throw err;
				console.log(data);
			});
		else {
			club.name = req.body.clubname;
			club.description = req.body.description;
		}
		//res.redirect('../../view/club'); //This should actually get the club name and send the user to the appropriate URL. Create a view router that sends the club page view
	});
});


module.exports = router;