import React, { Component } from 'react';
import Navbar from './components/navbar/navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Settings from './pages/settings';
import Rules from './pages/about';
import Statistics from './pages/statistics';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/settings' component={Settings} />
            <Route path='/statistics' component={Statistics} />
            <Route path='/about' component={Rules} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}
