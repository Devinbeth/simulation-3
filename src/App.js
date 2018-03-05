import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login.js';
import Dashboard from './components/Dashboard/Dashboard.js';
import Search from './components/Search/Search.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route exact path='/' component={ Login }/>
            <Route path='/dashboard' component={ Dashboard }/>
            <Route path='/search' component={ Search }/>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
