const FormController = require("../../controllers/form.controller");

describe("FormController.createEvent", () =>{
    it("Should have a createEvent function", () => {
        expect(typeof FormController.createEvent).toBe("function");
    });
});