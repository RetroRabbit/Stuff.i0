import React from 'react';
import { Field, reduxForm } from 'redux-form';

import {Route} from 'react-router-dom'
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import validate from './validate';
import './Login_index.css';
import history from '../store'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
	getUser,
	changeUser,
	getCurrentUser,
	registerUser,
	loginUser
} from '../reducers/Account'

import {
	addMsg,
	getMsgs,
	getChats
} from '../reducers/Chat'


	let email =  ""
	let password = ""

const Login = props => (
	<div className="back">
				<div className="backBox">
					<div className="welcomeToThe">
						Welcome to the
					</div>
					<div className="logo">
						<img src={require('./Full_Logo.png')} />
					</div>
					<div className="bottomBox">
						<div>
							<Route render={({ history}) => (
								<FlatButton className="noAccountYetGet"
									label="No account yet? Get setup now >"
								 	onClick={()=>{
									 	history.push('/StepOne');
								 	}}
							 	/>
							)} />
						</div>
					</div>
					<div className="loginBoxPos">
						<form>
							<div >
								<TextField
									className="loginBox"
									hintText='Email'
									floatingLabelText='Email'
									label="Email"
									type="email"
									onChange={(e)=>{
										email = e.target.value;
									}}
								/>
								<br></br>
								<TextField
									className="loginBox"
									hintText='Password'
									floatingLabelText='Password'
									label="Password"
									onChange={(e)=>{
										password = e.target.value;
									}}
									type="password"
								/>
							</div>
							<div >
								{
									!props.currentUser ?
									<FlatButton className="loginBtn"
										label="Login"
										onClick={()=>{

											props.loginUser({userEmail:email,userPassword:password});
											props.getCurrentUser();

										}}
									/>
									:
									<Route render={({ history}) => (
										<FlatButton className="loginBtn"
												label="Login"
												onClick={()=>{
												history.push('/settings');
											}}
	 								 	/>
               						)} />
								}
							</div>
						</form>
					</div>
				</div>
			</div>
		)

	const mapStateToProps = state => ({
	  chats:state.Chat.chats,
	  msgs:state.Chat.msgs,
	  currentUser: state.Account.currentUser,
	  users: state.Account.users,
	})

	const mapDispatchToProps = dispatch => bindActionCreators({
	  getUser,
	  getCurrentUser,
	  changeUser,
	  addMsg,
	  getMsgs,
	  registerUser,
	  loginUser,
	  getChats
	}, dispatch)

	const reduxform = () => reduxForm({
		form: 'App',
		validate,
	});

	export default connect(mapStateToProps, mapDispatchToProps)(Login);
