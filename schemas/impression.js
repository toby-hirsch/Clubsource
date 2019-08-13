const mongoose = require('mongoose');
const Joi = require('joi');

const ImpressionSchema = new mongoose.Schema({
	sess: {
		type: String,
		required: true
	},
	page: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Club'
	},
	ads: {
		type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ad' }],
		required: true
	},
	timestamp: {
		type: Date,
		required: true,
		default: Date.now
	} //Eventually add ads seen
},
{collection: 'impressions'});

const Impression = mongoose.model('Impression', ImpressionSchema);

function validateImpression(impression){
	const schema = {
		sess: Joi.string().min(5).max(255),
		page: Joi.string().min(5).max(255).email(),
		ads: Joi.array,
		timestamp: Joi.date().timestamp()
	};
	
	var result = Joi.validate(impression, schema);
	
	console.log('validation result: ' + result);
	
	return result;
}

exports.Impression = Impression;
exports.validate = validateImpression;