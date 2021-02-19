const express = require('express');
const eventRoutes = require('./routes/event.routes');
const app = express();
const mongodb = require('./momgodb/mongodb.connect');

mongodb.connect();

app.use(express.json());

app.use('/events', eventRoutes);

app.use((error, req, res, next) => {
	res.status(500).json({ message: error.message });
});

app.get('/', (req, res) => {
	res.send('Hello world!');
});

module.exports = app;
