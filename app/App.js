'use strict';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

// Top-level React (pure functional) component:
import Home from './Home';
import About from './About';
import Focus from './Focus';
import Contact from './Contact';
import Error404 from './Error404';

import NavBar from './NavBar';
import MainLayout from './MainLayout';


const App = () => (
  <Router history={ hashHistory }>
    <Route path='/' component={ MainLayout }>
      <IndexRoute component={ Home } />
      <Route path='/about' component={ About } />
      <Route path='/focus' component={ Focus } />
      <Route path='/contact' component={ Contact } />
      <Route path='*' component={ NotFound } />
    </Route>
  </Router>
);

export default App;


const NotFound = () => (
  <h1>404.. This page is not found!</h1>
);





// class App extends Component {
  
//   render() {
//     return (
//       <div>
//         <NavBar />
//       </div>
//     );
//   }
// };

// export default App;



// Inject into #app HTML element:
// ReactDOM.render(<App />, document.getElementById('app'));

// render((
//   <Router history={ hashHistory }>
//     <Route path="/" component={ App } />
//   </Router>
// ))


// insert into index.js
// import About from './modules/About'
// import Repos from './modules/Repos'

// render((
//   <Router history={hashHistory}>
//     <Route path="/" component={App}/>
//     {/* add the routes here */}
//     <Route path="/repos" component={Repos}/>
//     <Route path="/about" component={About}/>
//   </Router>
// ), document.getElementById('app'))
