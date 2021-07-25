import React from 'react';

// material ui
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

// material ui style
const styles = (theme) => ({
	root: {
		flexGrow: 1,
		overflow: 'hidden',
		padding: theme.spacing(0, 3),
	},
	paper: {
		maxWidth: 400,
		margin: `${theme.spacing(1)}px auto`,
		padding: theme.spacing(2),
	},
});

class TweetBox extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<Paper className={classes.paper}>
					<Grid container warp='nowrap' spacing={2}>
						<Grid item>
							<Avatar>AA</Avatar>
						</Grid>
						<Grid item xs>
							<Typography>{this.props.text}</Typography>
						</Grid>
					</Grid>
				</Paper>
			</div>
		);
	}
}

export default withStyles(styles)(TweetBox);
