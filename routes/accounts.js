const express = require("express");
const router = express.Router();

// Log a user out
router.get("/logout", (req, res) => {
	req.logout();
	req.session = null;
	res.redirect("/");
});


module.exports = router;