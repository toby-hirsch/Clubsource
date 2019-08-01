const mongoose = require('mongoose');
const Joi = require('joi');

const UserSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true
	},
	interests: [String],
	subscriptions: [String]
},
{collection: 'users'});

const User = mongoose.model('User', UserSchema);

/*function validateUser(user){
	const schema = {
		firstName: Joi.string().max(255),
		lastName: Joi.string().min(5).max(255).email(),
		description: Joi.string().min(5),
		tags: Joi.string()
	};
	
	var result = Joi.validate(club, schema);
	
	console.log('validation result: ' + result);
	
	return result;
}*/

exports.User = User;
//exports.validate = validateClub;