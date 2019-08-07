const express = require('express');
const router = express.Router();
const { Club } = require('../schemas/club');
const Converter = require('quill-delta-to-html').QuillDeltaToHtmlConverter;





router.get('/getdefault', function(req, res){
	let arr = [];
	Club.find({}, {username: true, name: true, tags: true}, function(err, clubs){
		console.log(clubs);
		res.json(clubs);
	});
});





const TITLE_MULTIPLIER = 5;
const USERNAME_MULTIPLIER = 50;
const TITLE_EXACT_MULTIPLIER = 30;
const TAG_MULTIPLIER = 2;
const DESCRIPTION_MULTIPLIER = 1;
const punc = /[!-\/:-@\[-`{-~ ]/g;
const markup = /(<([^>]+)>)/ig;

router.get('/search/:search', function(req, res) {
	console.log(req.params.search);
	var parsed = req.params.search.split('search=');
	parsed.shift();
	console.log(parsed);
	var keywords = clearEmpty(parsed[0].split(punc));
	console.log('keywords: ', keywords);
	var score;
	var sortedresult = []; //Store objects with this format: {score: num, club: object with quill and tags converted}
	Club.find({}, function(err, clubs){
		clubs.forEach(function(club){
			console.log('checking club');
			console.log(club);
			score = 0;
			club.description = new Converter(JSON.parse(club.description), {}).convert();
			score += DESCRIPTION_MULTIPLIER * getValue(keywords, clean(club.description.replace(markup, ' ')).split(punc));
			console.log('score after checking description: ' + score);
			score += TAG_MULTIPLIER * getValue(keywords, clean(club.tags).split(punc));
			console.log('score after checking tags: ' + score);
			score += TITLE_MULTIPLIER * getValue(keywords, clean(club.name).split(punc));
			console.log('score after checking title: ' + score);
			if (clean(req.params.search.replace(/_/g, ' '))===clean(club.name))
				score += TITLE_EXACT_MULTIPLIER;
			console.log('score after checking exact title: ' + score);
			if (exactMatch(keywords, club.username))
				score += USERNAME_MULTIPLIER;
			console.log('final score: ' + score);
			insertsorted(sortedresult, {score: score, club: club});
			console.log(sortedresult);
		});
		res.json(sortedresult.map(val => val.club));
	});
	
});

router.get('/', function(req, res, next) {
  res.json(['dogcrap', 'doggydoo']);
});

function clean(string){
	return string.trim().toLowerCase();
}

function clearEmpty(arr){
	for (var i in arr)
		if (arr[i]==='')
			arr.splice(i, 1);
	return arr;
}

function exactMatch(keywords, string){
	for (var i in keywords)
		if (clean(keywords[i])===clean(string))
			return true;
	return false;
}

function getValue(keywords, content){
	console.log('keywords: ', keywords);
	console.log('content: ', content);
	var count = 0;
	for (var i in keywords)
		for (var j in content)
			if (keywords[i]===content[j])
				count++;
	return Math.sqrt(count);
}

function insertsorted(arr, el){
	console.log(el);
	if (el.score == 0)
		return;
	arr.push(el);
	var len = arr.length;
	for (var i = len - 1; i > 0; i--){
		if (arr[i].score <= arr[i-1].score)
			return;
		swap(arr, i, i-1);
	}
}

function swap(arr, i, j){
	var k = arr[i];
	arr[i] = arr[j];
	arr[j] = k;
}

router.get('/:username', function(req, res) {
	var username = req.params.club;
	console.log('Received request with username ' + req.params.username);
	Club.findOne({username: req.params.username}, function(err, club){
		if (err) throw err; //Change before deploying
		if (club==null){
			res.json('not found');
			res.status(404);
		}
		else{
			console.log(club);
			res.json({
				clubname: club.name,
				username: club.username,
				officers: club.officers.replace(/,/g, ', '),
				meetingdates: club.meetingdates,
				tags: club.tags.replace(/,/g, ', '),
				description: new Converter(JSON.parse(club.description), {}).convert()
			});
		}
	});
});




module.exports = router;
