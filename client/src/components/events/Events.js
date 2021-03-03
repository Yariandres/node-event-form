import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Event from "./event/Event";
import useStyles from "../../styles";

const Events = () => {
   const events = useSelector((state) => state.events);

   const classes = useStyles();

   return !events.length ? (
      <CircularProgress />
   ) : (
      <Grid
         className={classes.container}
         container
         alignItems="stretch"
         spacing={3}
      >
         {events.map((event) => (
            <Grid key={event._id} item xs={12} sm={6}>
               <Event event={event} />
            </Grid>
         ))}
      </Grid>
   );
};

export default Events;
