const mongoose = require('mongoose');
const Joi = require('joi');

const UserSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true
	},
	interests: {
		type: [String],
		default: [],
		required: true
	},
	subscriptions: {
		type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Club' }],
		default: [],
		required: true
	}
},
{collection: 'users'});

const User = mongoose.model('User', UserSchema);

function validateUser(user){
	const schema = {
		email: Joi.string().email().required(),
		interests: Joi.array().items(Joi.string()),
		subscriptions: Joi.array()
	};
	
	var result = Joi.validate(user, schema);
	
	console.log('validation result: ' + result);
	
	return result;
}

exports.User = User;
exports.validate = validateUser;