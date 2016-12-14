'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router';

import NavBar from './NavBar';
import Footer from './Footer';


export default class MainLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-layout">
        <NavBar />
        <main className="main-content">
          {this.props.children}
        </main>
        <Footer />
      </div>
    );
  }
};
