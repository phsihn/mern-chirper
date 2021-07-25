import React from 'react';
import { withRouter } from 'react-router-dom';

// material ui
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// material ui style
const styles = (theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		padding: theme.spacing(2),
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			width: '25ch',
		},
	},
});

class SignupForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			handle: '',
			password: '',
			password2: '',
			errors: {},
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.clearedErrors = false;
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		if (nextProps.signedIn === true) {
			this.props.history.push('/login');
		}

		this.setState({ errors: nextProps.errors });
	}

	update(field) {
		return (e) =>
			this.setState({
				[field]: e.currentTarget.value,
			});
	}

	handleSubmit(e) {
		e.preventDefault();
		let user = {
			email: this.state.email,
			handle: this.state.handle,
			password: this.state.password,
			password2: this.state.password2,
		};

		this.props.signup(user, this.props.history);
	}

	renderErrors() {
		return (
			<ul>
				{Object.keys(this.state.errors).map((error, i) => (
					<li key={`error-${i}`}>{this.state.errors[error]}</li>
				))}
			</ul>
		);
	}

	render() {
		const { classes } = this.props;

		return (
			<div>
				<form onSubmit={this.handleSubmit} className={classes.root}>
					<TextField
						id='standard-basic'
						label='Email*'
						type='text'
						value={this.state.email}
						onChange={this.update('email')}
					/>
					<TextField
						id='standard-basic'
						label='Handle*'
						type='text'
						value={this.state.handle}
						onChange={this.update('handle')}
					/>
					<TextField
						id='standard-basic'
						label='Password*'
						type='password'
						value={this.state.password}
						onChange={this.update('password')}
					/>
					<TextField
						id='standard-basic'
						label='Confirm Password*'
						type='password'
						value={this.state.password2}
						onChange={this.update('password2')}
					/>
					<Button
						type='submit'
						value='Submit'
						variant='contained'
						color='primary'
					>
						Submit
					</Button>
					{this.renderErrors()}
				</form>
			</div>
		);
	}
}

export default withRouter(withStyles(styles)(SignupForm));
