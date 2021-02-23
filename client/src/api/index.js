import axios from "axios";

const url = "http://localhost:8080/events";

export const fetchEvents = () => axios.get(url);
export const createEvent = (newEvent) => axios.post(url, newEvent);