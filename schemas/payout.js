const mongoose = require('mongoose');
const Joi = require('joi');

const PayoutSchema = new mongoose.Schema({
	start: Date,
	end: {
		type: Date,
		required: true,
		default: Date.now
	},
	amount: {
		type: Number,
		required: true
	},
	recipients: { //query using Payout.find({ recipients.club: id })
		type: [{
			club: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Club',
				required: true
			},
			amount: {
				type: Number,
				required: true
			},
			_id: false
		}],
		required: true
	},
	latest: {
		type: Boolean,
		required: true,
		default: true
	}
},
{collection: 'payouts'});

const Payout = mongoose.model('Payout', PayoutSchema);

exports.Payout = Payout;