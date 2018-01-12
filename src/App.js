import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './css/index.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//Import Material-UI

// TODO : Import all the components
import settings from './components/settings/settings';

import headerNav from './components/headerNav/headerNav';
import StepOne from './components/registration/stepOne';
import StepTwo from './components/registration/stepTwo';
import StepThree from './components/registration/stepThree';

import AccountScreen from './components/accountScreen/accountScreen';
import Login from './components/login/loginIndex';

class App extends Component {
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <header />

                    <main>
                        <Route exact path="/Login" component={Login} />
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
