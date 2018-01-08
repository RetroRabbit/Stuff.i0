import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './css/index.css';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//Import Material-UI

// TODO : Import all the components
import home from './components/home'

import settings from './components/settings'

import headerNav from './components/headerNav'

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
            <Route exact path="/" component={home} />
            <Route exact path="/nav" component={headerNav} />
            <Route exact path="/settings" component={settings} />
          </main>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
