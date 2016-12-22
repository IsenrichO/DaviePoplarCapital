'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router';

import NavBar from './partials/NavBar';
import Footer from './partials/Footer';
import { assignClassNames } from '../Mixins';


export default class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.getHashAsClass = this.getHashAsClass.bind(this);
  }

  componentDidMount() { this.getHashAsClass(); }
  componentWillReceiveProps() { this.getHashAsClass(); }
  getHashAsClass() { assignClassNames(this.refs.main); }

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
