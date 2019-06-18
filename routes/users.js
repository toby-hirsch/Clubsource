//Not sure why, but this seems to have to be named users. Changing API call client-side was not sufficient

var express = require('express');
var router = express.Router();

//This gets called by the React app on load, so this is where the information should be retrieved and processed for the React app
router.get('/', function(req, res, next) {
  res.json(['dogcrap', 'doggydoo']);
});

module.exports = router;
