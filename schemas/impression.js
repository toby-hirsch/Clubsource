const mongoose = require('mongoose');
const joi = require('joi');

const ImpressionSchema = new mongoose.Schema({
	sess: {
		type: String,
		required: true
	},
	page: {
		type: String,
		required: true,
	},
	timestamp: {
		type: Date,
		required: true,
		default: Date.now
	} //Eventually add ads seen
},
{collection: 'impressions'});

const Impression = mongoose.model('Impression', ImpressionSchema);

function validateImpression(club){
	const schema = {
		sess: Joi.string().min(5).max(255),
		page: Joi.string().min(5).max(255).email(),
		description: Joi.string().min(5),
		tags: Joi.array.items(Joi.string())
	};
	
	var result = joi.validate(impression, schema);
	
	console.log('validation result: ' + result);
	
	return result;
}

exports.Club = Impression;
exports.validate = validateImpression;