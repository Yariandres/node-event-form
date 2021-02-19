const request = require('supertest');
const newEvent = require('../mock-data/new-event.json');
const app = require('../../app');

const endpointUrl = '/events/';

describe(endpointUrl, () => {
	it('POST' + endpointUrl, async () => {
		const response = await request(app).post(endpointUrl).send(newEvent);
		expect(response.statusCode).toBe(201);
		expect(response.body.firstName).toBe(newEvent.firstName);
		expect(response.body.lastName).toBe(newEvent.lastName);
		expect(response.body.email).toBe(newEvent.email);
		expect(response.body.date).toBe(newEvent.date);
	});

	it(
		'Should return error 500 on malformed data with the POST' + endpointUrl,
		async () => {
			const response = await request(app)
				.post(endpointUrl)
				.send({ title: 'Missing date property' });
			expect(response.statusCode).toBe(500);
			expect(response.body).toStrictEqual({
				message:
                        "Event validation failed: date: Path `date` is required., email: Path `email` is required., lastName: Path `lastName` is required., firstName: Path `firstName` is required."
			});
		},
	);
});
