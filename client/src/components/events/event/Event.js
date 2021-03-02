import React from "react";
import { Card, CardContent, Typography, CardHeader } from "@material-ui/core";

import moment from "moment";

import useStyles from "../../../styles";

const Event = ({ event }) => {
   const classes = useStyles();

   return (
      <Card className={classes.card}>
         <CardHeader
            title={moment(event.date).format("MMMM d, YYYY")}
         ></CardHeader>

         <CardContent>
            <Typography paragraph>Create by:</Typography>
            <Typography variant="body2" color="textSecondary" component="p">
               {event.firstName}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
               {event.lastName}
            </Typography>
         </CardContent>
      </Card>
   );
};

export default Event;
