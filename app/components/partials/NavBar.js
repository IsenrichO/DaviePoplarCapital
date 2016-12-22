'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router';


export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.activate = this.activate.bind(this);
    this.deactivate = this.deactivate.bind(this);
    this.detectCurrentRoute = this.detectCurrentRoute.bind(this);
    this.executeNavAction = this.executeNavAction.bind(this);
    this.renderNavLinks = this.renderNavLinks.bind(this);
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

  detectCurrentRoute(route) {
    const [HASH, HASH_PATTERN] = [document.location.hash, new RegExp(`^#.+`)],
          currRoute = (HASH_PATTERN.test(HASH) ? HASH.match(HASH_PATTERN)[0].substr(1) : null),
          routeName = `${currRoute.charAt(0).toUpperCase()}${currRoute.slice(1)}`;
    return (routeName && routeName === `/${route.target}`.replace(/^(\/){2,}/, '$1')
      ? '\u25CB \u00A0'
      : '') + route.destination;
  }

  // Control of sidebar navigation menu display and behavior:
  executeNavAction(evt, glyph, nav) {
    (nav.classList.contains('active') && evt.target !== nav && evt.target.parentNode !== nav)
    || (nav.classList.contains('active') && evt.target === glyph)
      ? this.deactivate(glyph, nav) : evt.target === glyph
      ? this.activate(glyph, nav)
      : null;
  }

  renderNavLinks(links) {
    return links.map((link, index) =>
      <Link
        to={ link.target }
        data-route={ link.destination }>
        { this.detectCurrentRoute(link) }
      </Link>
    );
  }

  componentDidMount() {
    const [self, { toggleBtn: glyph, navWrapper: nav }] = [this, this.refs];

    // Event listener controls automated closure of navigation menu sidebar on outside click event:
    window.addEventListener('mouseup', (evt) => { self.executeNavAction(evt, glyph, nav); }); 
  }

  render() {
    const routes = [
      { destination: "Home", target: "/" },
      { destination: "About", target: "about" },
      { destination: "Focus", target: "focus" },
      { destination: "Contact", target: "contact" }
    ];

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
          <nav id="nav-links">
            { this.renderNavLinks(routes) }
          </nav>
        </div>
      </div>
    );
  }
};


// <Link to="/" data-route="Home">Home</Link>
// <Link to="about" data-route="About">About</Link>
// <Link to="focus" data-route="Focus">Focus</Link>
// <Link to="contact" data-route="Contact">Contact</Link>
