import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Button, Typography, Paper } from "@material-ui/core";

import useStyles from "./style";
import { createEvent } from "../../actions/events";

const Form = () => {
   const classes = useStyles();
   const dispatch = useDispatch();

   const [eventData, setEventData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      date: "",
   });

   const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(createEvent(eventData));
   };

   const clear = () => {
      setEventData({
         firstName: "",
         lastName: "",
         email: "",
         date: "",
      });
   };

   return (
      <Paper className={classes.paper}>
         <form
            autoComplete="off"
            noValidate
            className={`${classes.root} ${classes.form}`}
            onSubmit={handleSubmit}
         >
            <Typography variant="h6">Create an event</Typography>

            <TextField
               name="firstName"
               variant="outlined"
               label="First name"
               fullWidth
               value={eventData.firstName}
               onChange={(e) =>
                  setEventData({
                     ...eventData,
                     firstName: e.target.value,
                  })
               }
            ></TextField>

            <TextField
               name="lastName"
               variant="outlined"
               label="Last name"
               fullWidth
               value={eventData.lastName}
               onChange={(e) =>
                  setEventData({ ...eventData, lastName: e.target.value })
               }
            ></TextField>

            <TextField
               name="email"
               variant="outlined"
               label="Email"
               fullWidth
               value={eventData.email}
               onChange={(e) =>
                  setEventData({ ...eventData, email: e.target.value })
               }
            ></TextField>
            <TextField
               name="date"
               variant="outlined"
               type="date"
               fullWidth
               value={eventData.date}
               onChange={(e) =>
                  setEventData({ ...eventData, date: e.target.value })
               }
            ></TextField>
            <Button
               className={classes.buttonSubmit}
               variant="contained"
               color="primary"
               size="large"
               type="submit"
               fullWidth
            >
               Submit
            </Button>

            <Button
               variant="contained"
               color="secondary"
               size="small"
               onClick={clear}
               fullWidth
            >
               Clear
            </Button>
         </form>
      </Paper>
   );
};

export default Form;
