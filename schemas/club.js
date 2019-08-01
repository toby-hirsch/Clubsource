const mongoose = require('mongoose');
const Joi = require('joi');

const ClubSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	username: {
		type: String,
		required: true,
		unique: true
	},
	leader: {
		type: String,
		required: true,
		unique: true
	},
	officers: String,
	meetingdates: String,
	description: {
		type: String,
		required: true
	},
	tags: String
},
{collection: 'clubs'});

const Club = mongoose.model('Club', ClubSchema);

function validateClub(club){
	const schema = {
		name: Joi.string().min(5).max(255),
		leader: Joi.string().min(5).max(255).email(),
		description: Joi.string().min(5),
		tags: Joi.string()
	};
	
	var result = Joi.validate(club, schema);
	
	console.log('validation result: ' + result);
	
	return result;
}

exports.Club = Club;
exports.validate = validateClub;