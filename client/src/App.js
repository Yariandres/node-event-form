import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getEvents } from './actions/events';

import Events from './components/events/Events';
import Form from './components/form/Form';

import useStyles from './styles';

const App = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getEvents());
	}, [dispatch]);

	return (
		<Container maxwidth='lg'>
			<AppBar
				className={classes.appBar}
				position='static'
				color='inherit'
			>
				<Typography
					className={classes.heading}
					variant='h2'
					align='center'
				>
					Events
				</Typography>
			</AppBar>
			<Grow in>
				<Container>
					<Grid
						container
						justify='space-between'
						alignItems='stretch'
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
