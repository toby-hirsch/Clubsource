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
	tags: String,
	balance: {
		type: Number,
		required: true,
		default: 0
	}
},
{collection: 'clubs'});

ClubSchema.index({'$**': 'text'}, {'weights': {name: 5, username: 7, officers: 3, meetingdates: 5, description: 1, tags: 2}}); 

const Club = mongoose.model('Club', ClubSchema);

function validateClub(club){
	const schema = {
		name: Joi.string().required(),
		username: Joi.string().alphanum().max(20).required(),
		leader: Joi.string().email().required(),
		officers: Joi.string().allow(''),
		meetingdates: Joi.string().allow(''),
		description: Joi.string().allow('').required(),
		tags: Joi.string().allow('')
	};
	
	var result = Joi.validate(club, schema);
	
	//console.log('validation result');
	//console.log(result);
	
	return result;
}

exports.Club = Club;
exports.validate = validateClub;