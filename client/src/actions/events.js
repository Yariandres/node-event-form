import * as api from "../api/index.js";

// Action creators
export const getEvents = () => async (dispatch) => {
    try {
        const { data } = await api.fetchEvents();
        dispatch({ type: "FETCH_ALL", payload: data });
    
    } catch (error) {
        console.log(error);
    }    
};



