const EventModel = require('../model/event.model');

exports.createEvent = async (req, res, next) => {
	try {
		const createdModel = await EventModel.create(req.body);
		res.status(201).json(createdModel);
	} catch (err) {
		next(err);
	}
};

exports.getEvents = async (req, res, next) => {
    EventModel.find({});
};
