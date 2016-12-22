'use strict';
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// Layouts - route-invariant site layout views:
import MainLayout from './components/MainLayout';
import NavBar from './components/partials/NavBar';

// Pages - route-specific views:
import Home from './components/Home';
import About from './components/About';
import Focus from './components/Focus';
import Contact from './components/Contact';
import Error404 from './components/Error404';


const Routes = () => (
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

export default Routes;
