const request = require('supertest');
const app = require('../../app');
const newEvent = require('../mock-data/new-event.json');

const endpointUrl = '/events/';

describe(endpointUrl, () => {
	it('POST' + endpointUrl, () => {
		request(app)
            .post(endpointUrl);
	});
});
