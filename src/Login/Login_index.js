import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import asyncValidate from './asyncValidate';
import validate from './validate';
import './Login_index.css';
import history from './history';



const renderTextField = (
{ input, label, meta: { touched, error }, ...custom },
) => (
	<TextField
		className="loginbox"
		hintText={label}
		floatingLabelText={label}
		errorText={touched && error}
		{...input}
		{...custom}
	/>
);

const App = props => {
	const { handleSubmit, pristine, reset, submitting } = props;
		return (
			<div className="back">
				<div className="backbox">
					<div className="welcome-to-the">
					Welcome to the
					</div>
					<div className="logo">
						<img src={require('./Full_Logo.png')} />
					</div>
					<div className="bottombox">
						<div>
							<FlatButton className="no-account-yet-get"
								label="No account yet? Get setup now >"
								onClick={history.push('registration')}
							/>
						</div>
					</div>
					<div className="loginboxpos">
						<form onSubmit={handleSubmit}>
							<div >
								<TextField 
									className="loginbox"
									hintText='Email'
									floatingLabelText='Email'
									label="Email"
									type="email"
									component={renderTextField}
								/>
								<br></br>
								<TextField
									className="loginbox"
									hintText='Password'
									floatingLabelText='Password'
									label="Password"
									type="password"
									component={renderTextField}
								/>
							</div>
							<div >
								<FlatButton className="loginbtn"
									label="Login"
									type="submit"
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
};

export default reduxForm({
	form: 'App',
	validate,
	asyncValidate,
  })(App);

