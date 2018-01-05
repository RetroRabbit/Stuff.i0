import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import './css/index.css';
import { headerNav } from './components/headerNav'
import AccountScreen  from './accountScreen/accountScreen'

// TODO : Import all the components
import home from './components/home'


class App extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>

        <main>
          <Route exact path="/" component={home} />
          <Route exact path="/AccountScreen" component={AccountScreen} />
        </main>
      </div>
    );
  }
}

export default App;
