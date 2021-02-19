const EventController = require("../../controllers/event.controller");
const EventModel = require("../../model/event.model");
const httpMocks = require("node-mocks-http");
const newEvent = require("../mock-data/new-event.json");

EventModel.create = jest.fn();

let req, res, next;

beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = null;
});

describe("EventController.createEvent", () =>{

    beforeEach(() => {
        req.body = newEvent;
    });

    it("Should have a createEvent function", () => {
        expect(typeof EventController.createEvent).toBe("function");
    });

    it("Should call EventModel.create", () => {  
        EventController.createEvent(req, res, next);
        expect(EventModel.create).toBeCalledWith(newEvent);
    });

    it("Should return 201 response code", async () => {
        await EventController.createEvent(req, res, next);
        expect(res.statusCode).toBe(201);
        expect(res._isEndCalled()).toBeTruthy();
    });

    it("Should return json body in response", async () => {
        EventModel.create.mockReturnValue(newEvent);
        await EventController.createEvent(req, res, next);

        expect(res._getJSONData()).toStrictEqual(newEvent);
    })
});