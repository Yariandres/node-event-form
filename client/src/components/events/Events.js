import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import Post from "./event/Event";
import useStyles from "../../styles";

const Events = () => {
    const events = useSelector((state) => state.events);

    console.log(events);

    const classes = useStyles();
    return (
        <Fragment>
            <h1>Posts</h1>
        
            <Post/>
            <Post/>
        </Fragment>
    );
};

export default Events;