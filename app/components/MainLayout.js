import React, { Component } from 'react';
import { Link } from 'react-router';

import NavBar from './NavBar';


export default class MainLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='main-layout'>
        <NavBar />
        <main id='main-content'>
          {this.props.children}
        </main>
      </div>
    );
  }
};
