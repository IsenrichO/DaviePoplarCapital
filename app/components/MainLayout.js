'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router';

import NavBar from './NavBar';
import Footer from './Footer';


export default class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.getHashAsClass = this.getHashAsClass.bind(this);
  }

  componentDidMount() { this.getHashAsClass(); }
  componentWillReceiveProps() { this.getHashAsClass(); }

  getHashAsClass() {
    const assignClass = () => 'main-content'
      + (/^#\/$/.test(document.location.hash) ? ' home' : ` ${document.location.hash.match(/\w+/gi)}`);
    this.refs.main.className = assignClass();
  }

  render() {
    return (
      <div className="main-layout">
        <NavBar />
        <main ref="main">{ this.props.children }</main>
        <Footer />
      </div>
    );
  }
};
