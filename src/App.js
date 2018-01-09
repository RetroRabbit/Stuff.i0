import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import './css/index.css';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//Import Material-UI

// TODO : Import all the components
import home from './components/home'

import settings from './components/settings'

import headerNav from './components/headerNav'
import StepOne from './registration/StepOne';
import StepTwo from './registration/StepTwo';
import StepThree from './registration/StepThree';

import AccountScreen from './accountScreen/accountScreen';
import Login from './Login/Login_index';
class App extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
        <header>
        </header>

        <main>
            <Route exact path="/Login" component={Login}/>
            <Route exact path="/" component={Login} />
            <Route exact path="/nav" component={headerNav} />
            <Route exact path="/settings" component={settings} />
            <Route exact path="/StepOne" component={StepOne} />
            <Route exact path="/StepTwo" component={StepTwo} />
            <Route exact path="/StepThree" component={StepThree} />
            <Route exact path="/AccountScreen" component={AccountScreen} />

          </main>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
