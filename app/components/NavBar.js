'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router';


export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.activate = this.activate.bind(this);
    this.deactivate = this.deactivate.bind(this);
    this.executeNavAction = this.executeNavAction.bind(this);
  }

  // Function `activate` induces active sidebar menu display state:
  activate(glyph, nav) {
    nav.classList.toggle('active');
    glyph.style.color = '#FFF';
    glyph.style.transform = 'rotate(90deg)';
  }

  // Function `deactivate` induces inactive sidebar menu display state:
  deactivate(glyph, nav) {
    nav.classList.toggle('active');
    glyph.style.color = '#4F98C9';
    glyph.style.transform = 'rotate(0deg)';
  }

  // Control of sidebar navigation menu display and behavior:
  executeNavAction(evt, glyph, nav) {
    (nav.classList.contains('active') && evt.target != nav && evt.target.parentNode != nav)
    || (nav.classList.contains('active') && evt.target == glyph)
      ? this.deactivate(glyph, nav) : evt.target === glyph
      ? this.activate(glyph, nav)
      : null;
  }

  componentDidMount() {
    const [self, { toggleBtn: glyph, navWrapper: nav }] = [this, this.refs];

    // Event listener controls automated closure of navigation menu sidebar on outside click event:
    window.addEventListener('mouseup', (evt) => { self.executeNavAction(evt, glyph, nav); }); 
  }

  render() {
    return (
      <div id="nav-bar">
        <span
          id="hamburger-icon"
          ref="toggleBtn"
          data-charRef="HTML Character, Heaven Trigram (a.k.a. the 'hamburger' icon): ☰">
          &#9776;
        </span>
        <div
          id="nav-links-wrapper"
          ref="navWrapper">
          <nav id="inter-pageNavBar">
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
            <Link to="focus">Focus</Link>
            <Link to="contact">Contact</Link>
          </nav>
        </div>
      </div>
    );
  }
};
