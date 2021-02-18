
const EventModel = require("../model/event.model");

exports.createEvent = (req, res, next) => {
    const createdModel = EventModel.create(req.body);
    res.status(201).json(createdModel);
};
