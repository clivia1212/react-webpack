import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import APage from './aPage';
import BPage from './bPage';
import CPage from './cPage';
import Nav from './nav';
import Error from './error';


ReactDOM.render(
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={APage} />
        <Route path="/b" component={BPage} />
        <Route path="/c/:param" component={CPage} />
        <Redirect from="/redirect" to="/" />
        <Route component={Error} />
      </Switch>
    </div>
  </Router>,
  document.getElementById('app')
);