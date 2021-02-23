// eslint-disable-next-line import/no-anonymous-default-export
export default (events = [], action) => {
	switch (action.type) {
		case "FETCH_ALL":	
			return action.payload;
		case "CREATE":
			return events;
		default:
			return events;
	}
};

