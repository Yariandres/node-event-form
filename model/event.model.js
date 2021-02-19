const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
	firstName: {
		type: 'string',
		required: true,
	},
	lastName: {
		type: 'string',
		required: true,
	},
	email: {
		type: 'string',
		required: true,
	},
	date: { 
		type: Date, 
		required: true
	},
});

const EventModel = mongoose.model('Event', EventSchema);

module.exports = EventModel;
