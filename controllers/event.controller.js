
const EventModel = require("../model/event.model");

exports.createEvent = async (req, res, next) => {
    const createdModel = await EventModel.create(req.body);
    res.status(201).json(createdModel);
};
