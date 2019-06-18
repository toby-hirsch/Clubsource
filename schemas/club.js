const mongoose = require('mongoose');
const joi = require('joi');

const ClubSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	leader: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	}
},
{collection: 'clubs'});

const Club = mongoose.model('Club', ClubSchema);

function validateClub(club){
	const schema = {
		name: Joi.string().min(5).max(255),
		leader: Joi.string().min(5).max(255).email(),
		description: Joi.string().min(5)
	};
	
	var result = joi.validate(club, schema);
	
	console.log('validation result: ' + result);
	
	return result;
}

exports.Club = Club;
exports.validate = validateClub;