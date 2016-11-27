'use strict';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, browserHistory } from 'react-router';
import NavBar from './NavBar';
import CenteredLogo from './CenteredLogo';

// Top-level React (pure functional) component:
const App = () => (
  <div>
    <NavBar />
    <CenteredLogo />
  </div>
);

// Inject into #app HTML element:
ReactDOM.render(<App />, document.getElementById('app'));
