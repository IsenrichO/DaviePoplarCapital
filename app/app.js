'use strict';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import NavBar from './NavBar';

// Top-level React (pure functional) component:
const App = () => (
  <div>
    <NavBar />
  </div>
);

// Inject into #app HTML element:
ReactDOM.render(<App />, document.getElementById('app'));
