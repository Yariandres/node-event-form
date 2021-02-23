import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import Event from "./event/Event";
import useStyles from "../../styles";

const Events = () => {
    const events = useSelector((state) => state.events);

    console.log(events);

    const classes = useStyles();
    return (
        <Fragment>
            <h1>Events</h1>
        
            <Event/>
            <Event/>
        </Fragment>
    );
};

export default Events;