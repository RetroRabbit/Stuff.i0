import React, { Component } from 'react';
import './Login_index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import history from './history';

class App extends Component {

	onSubmit(e) {
		e.preventDefault();
	
		const { email, password } = this.state;
		const { history } = this.props;
	
		this.setState({ error: false });
	
		if (!(email === '123@123.co.za' && password === '123')) {
			return this.setState({ error: true });
		}
		history.push('/accountScreen');
	}

	onRegister(e) {
		history.push('registration');
	}

	render() {
		return (
			<div className="backbox">

				<div className="welcome-to-the">
				Welcome to the
				</div>

				<div className="logo">
				<img src={require('./Full_Logo.png')} />
				</div>
				<MuiThemeProvider >
				<div className="bottombox">
					<div>
						<FlatButton className="no-account-yet-get"
							label="No account yet? Get setup now >"
							onClick={(event) => this.onRegister(event)}
						/>
					</div>
				</div>
				</MuiThemeProvider >
				<div className="loginboxpos">
				<MuiThemeProvider >
					<div >
						<TextField className="loginbox"
							hintText="Email"
							floatingLabelText="Email"
							type="email"
							onChange = {(event,newValue) => this.setState({email:newValue})}
						/>
						<br></br>
						<TextField className="loginbox"
							hintText="Password"
							floatingLabelText="Password"
							type="password"
							onChange = {(event,newValue) => this.setState({password:newValue})}
						/>
					</div>
				</MuiThemeProvider>
				</div>

				<MuiThemeProvider >
					<div >
						<FlatButton className="loginbtn"
							label="Login"
							type="submit"
							onClick={(event) => this.onSubmit(event)}
						/>
					</div>
				</MuiThemeProvider>
			</div>
			
		);
	}
}

export default App;
