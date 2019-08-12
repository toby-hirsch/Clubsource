const mongoose = require('mongoose');
const joi = require('joi');

const AdSchema = new mongoose.Schema({
	img: {
		type: Buffer,
		required: true
	},
	prefix: {
		type: String,
		required: true
	},
	url: {
		type: String,
		required: true,
	},
},
{collection: 'ads'});

const Ad = mongoose.model('Ad', AdSchema);

function validateAd(ad){
	const schema = {
		img: Joi.binary().encoding('base64'),
		url: Joi.string().uri(),
		prefix: Joi.string()
	};
	
	var result = joi.validate(ad, schema);
	
	console.log('validation result: ' + result);
	
	return result;
}

exports.Ad = Ad;
exports.validate = validateAd;