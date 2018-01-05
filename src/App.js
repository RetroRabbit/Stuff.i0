import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import './css/index.css';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//Import Material-UI

// TODO : Import all the components
import home from './components/home'

import settings from './components/setings'

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
          <Link to="/">Home</Link>
          <Link to="/nav">Header</Link>
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
