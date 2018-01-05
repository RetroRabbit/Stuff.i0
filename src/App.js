import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import './css/index.css';
import { headerNav } from './header.js'

// TODO : Import all the components
import home from './components/home'


class App extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <header>
          <headerNav></headerNav>
          <Link to="/">Home</Link>
        </header>

        <main>
          <Route exact path="/" component={home} />
        </main>
      </div>
    );
  }
}

export default App;
