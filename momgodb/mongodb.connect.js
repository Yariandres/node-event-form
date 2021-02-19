const mongoose = require('mongoose');

async function connect() {
	try {
		await mongoose.connect(
			'mongodb+srv://yari:HM4U!gBQep5Lv@g@cluster0.j4sp2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
			{ useNewUrlParser: true, useUnifiedTopology: true },
		);
	} catch (err) {
		console.error('Error connecting to mdb');
		console.error(err);
	}
}

module.exports = { connect };
