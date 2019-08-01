const express = require('express');
const router = express.Router();
const { User } = require('../schemas/user');

router.get('/', function(req, res){
	if (req.session.token) {
		console.dir(req.user);
        res.cookie('token', req.session.token);
		//res.render('profile');
		let email = req.user.profile.emails[0].value;
		User.findOne({email: email}, (err, profile) => {
			if (!profile)
				User.create({email: email}, (err, profile) => {
					res.render('profile', profile);
				});
			res.render('profile', profile);
		});
        /*res.json({
            status: 'session cookie set',
			email: req.user.profile.emails[0].value
        });*/
    } else {
        res.cookie('token', '')
        res.json({
            status: 'session cookie not set'
        });
    }
});

module.exports = router;