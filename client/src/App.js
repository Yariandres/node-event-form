import React, { useEffect } from "react";
import { Container, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getEvents } from "./actions/events";

import Events from "./components/events/Events";
import Form from "./components/form/Form";

const App = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getEvents());
   }, [dispatch]);

   return (
      <Container maxwidth="lg">
         <Typography variant="h2" align="center">
            Events
         </Typography>

         <Grow in>
            <Container>
               <Grid
                  container
                  justify="space-between"
                  alignItems="stretch"
                  spacing={3}
               >
                  <Grid item xs={12} sm={7}>
                     <Events></Events>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                     <Form></Form>
                  </Grid>
               </Grid>
            </Container>
         </Grow>
      </Container>
   );
};

export default App;
