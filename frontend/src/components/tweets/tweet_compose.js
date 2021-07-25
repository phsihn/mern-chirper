import React from 'react';
import TweetBox from './tweet_box';

// material ui
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

// material ui style
const styles = (theme) => ({
	root: {
		flexGrow: 1,
	},
	textfieldTweet: {
		marginTop: '1.5rem',
		width: '100%',
	},
	submitTweetButton: {
		marginTop: '.5rem',
		width: '100%',
	},
	tweetBox: {
		marginTop: '1.5rem',
		width: '100%',
	},
});

class TweetCompose extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			text: '',
			newTweet: '',
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ newTweet: nextProps.newTweet.text });
	}

	handleSubmit(e) {
		e.preventDefault();
		let tweet = {
			text: this.state.text,
		};

		this.props.composeTweet(tweet);
		this.setState({ text: '' });
	}

	update() {
		return (e) =>
			this.setState({
				text: e.currentTarget.value,
			});
	}

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<Grid container spacing={3}>
					<Grid item xs></Grid>
					<Grid item xs={6}>
						<form className={classes.root} onSubmit={this.handleSubmit}>
							<TextField
								type='textarea'
								id='outlined-basic'
								className={classes.textfieldTweet}
								variant='outlined'
								multiline
								rows={4}
								rowsMax={4}
								label='Write a tweet...'
								value={this.state.text}
								onChange={this.update()}
							/>
							<Button
								variant='contained'
								color='primary'
								className={classes.submitTweetButton}
								type='submit'
								value='Submit'
							>
								Submit
							</Button>
						</form>
						<TweetBox text={this.state.newTweet} />
					</Grid>
					<Grid item xs></Grid>
				</Grid>
			</div>
		);
	}
}

export default withStyles(styles)(TweetCompose);
