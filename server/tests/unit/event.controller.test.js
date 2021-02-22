const EventController = require('../../controllers/event.controller');
const EventModel = require('../../model/event.model');
const httpMocks = require('node-mocks-http');
const newEvent = require('../mock-data/new-event.json');
const allEvents = require('../mock-data/all-events.json');

EventModel.create = jest.fn();
EventModel.find = jest.fn();

let req, res, next;

beforeEach(() => {
	req = httpMocks.createRequest();
	res = httpMocks.createResponse();
	next = jest.fn();
});

describe('EventController.getEvents', () => {
	it('Should have a getEvents function', () => {
		expect(typeof EventController.getEvents).toBe('function');
	});
	it('should call EventModel.find({})', async () => {
		await EventController.getEvents(req, res, next);
		expect(EventModel.find).toHaveBeenCalledWith({});
	});
	it('Should return response with status code 200 and all events', async () => {
		EventModel.find.mockReturnValue(allEvents);

		await EventController.getEvents(req, res, next);
		expect(res.statusCode).toBe(200);
		expect(res._isEndCalled()).toBeTruthy();
		expect(res._getJSONData()).toStrictEqual(allEvents);
	});
	it('should handle errors in getEvents', async () => {
		const errorMessage = { message: "Error finding"};
        const rejectedPromise = Promise.reject(errorMessage);

        EventModel.find.mockReturnValue(rejectedPromise);
        await EventController.getEvents(req, res, next);

        expect(next).toHaveBeenCalledWith(errorMessage);
	});
});

describe('EventController.createEvent', () => {
	beforeEach(() => {
		req.body = newEvent;
	});

	it('Should have a createEvent function', () => {
		expect(typeof EventController.createEvent).toBe('function');
	});

	it('Should call EventModel.create', () => {
		EventController.createEvent(req, res, next);
		expect(EventModel.create).toBeCalledWith(newEvent);
	});

	it('Should return 201 response code', async () => {
		await EventController.createEvent(req, res, next);
		expect(res.statusCode).toBe(201);
		expect(res._isEndCalled()).toBeTruthy();
	});

	it('Should return json body in response', async () => {
		EventModel.create.mockReturnValue(newEvent);
		await EventController.createEvent(req, res, next);

		expect(res._getJSONData()).toStrictEqual(newEvent);
	});

	it('Should handle errors', async () => {
		const errorMessage = { message: 'Date property missing' };
		const rejectedpromise = Promise.reject(errorMessage);

		EventModel.create.mockReturnValue(rejectedpromise);
		await EventController.createEvent(req, res, next);

		expect(next).toBeCalledWith(errorMessage);
	});
});
