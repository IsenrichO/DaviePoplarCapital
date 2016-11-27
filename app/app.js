'use strict';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import NavBar from './NavBar';
// import CenteredLogo from './CenteredLogo';
import Router1 from './Router';

// Top-level React (pure functional) component:
import Home from './Home';
import About from './About';
import Focus from './Focus';
import Contact from './Contact';

class App extends Component {
  render () {
    return (
      <Router history={ hashHistory }>
        <Route path='/' component={ Container }>
          <IndexRoute component={ Home } />
          <Route path='/about' component={ About } />
          <Route path='/focus' component={ Focus } />
          <Route path='/contact' component={ Contact } />
          <Route path='*' component={ NotFound } />
        </Route>
      </Router>
    )
  }
}

const Home1 = () => <h1>Hello from Home!</h1>
const Address = () => <h1>We are located at 555 Jackson St.</h1>
const NotFound = () => (
  <h1>404.. This page is not found!</h1>
);

const Container = (props) => (
  <div>
    <NavBar />
    {props.children}
  </div>
);

// const Nav = () => (
//   <div>
//     <Link to='/'>Home</Link>&nbsp;
//     <Link to='/address'>Address</Link>
//   </div>
// );
export default App;





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
