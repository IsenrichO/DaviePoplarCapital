'use strict';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import NavBar from './NavBar';
import DPCLogo from './DPCLogo_SVG';

// Top-level React (pure functional) component:
const App = () => (
  <div>
    <NavBar />
    <DPCLogo />
  </div>
);

// Inject into #app HTML element:
ReactDOM.render(<App />, document.getElementById('app'));
