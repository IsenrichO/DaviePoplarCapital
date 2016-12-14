'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router'

import '../public/styles/master.scss';

// Route-specific views:
import Home from './components/Home';
import About from './components/About';
import Focus from './components/Focus';
import Contact from './components/Contact';
import Error404 from './components/Error404';

// Route-invariant site layout views:
import NavBar from './components/NavBar';
import MainLayout from './components/MainLayout';


// Top-level React (pure functional) component:
const App = () => (
  <Router history={ hashHistory }>
    <Route path='/' component={ MainLayout }>
      <IndexRoute component={ Home } />
      <Route path='/about' component={ About } />
      <Route path='/focus' component={ Focus } />
      <Route path='/contact' component={ Contact } />
      <Route path='*' component={ Error404 } />
    </Route>
  </Router>
);

export default App;
