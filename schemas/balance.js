const mongoose = require('mongoose');
const Joi = require('joi');

const BalanceSchema = new mongoose.Schema({
	_id: false,
	club: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Club',
		required: true,
		unique: true
	},
	balance: {
		type: Number,
		required: true
	}
},
{collection: 'balances'});

const Balance = mongoose.model('Balance', BalanceSchema);

exports.Balance = Balance;