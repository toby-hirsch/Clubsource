const express = require("express");
const router = express.Router();

// Log a user out
router.get("/logout", (req, res) => {
	console.log('**************************************************************************INITIATING LOGOUT************************************************************');
	req.session.destroy((err) => {
		if(err) return next(err)

		req.logout()
		console.log('session');
		console.log(req.session);
		res.redirect('/');
	})
	
});

router.get('/type', (req, res) => {
	let type = {};
	if (req.user)
		type.student = true;
	if (req.clubowner)
		type.club = true;
	console.log('account type:');
	console.log(type);
	res.json(type);
});

router.get('/login', (req, res) => {
	res.render('login');
});


module.exports = router;