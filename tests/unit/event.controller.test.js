const EventController = require("../../controllers/event.controller");
const EventModel = require("../../model/event.model");

EventModel.create = jest.fn();

describe("EventController.createEvent", () =>{
    it("Should have a createEvent function", () => {
        expect(typeof EventController.createEvent).toBe("function");
    });

    it("Should call EventModel.create", () => {
        EventController.createEvent().toBeCalled();
    })
});