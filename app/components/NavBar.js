'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router';

// Control of sidebar navigation menu display and behavior:
const toggleNav = () => {
  let nav = document.getElementById('nav-links-wrapper'),
      glyph = document.getElementById('hamburger-icon');

  // Function 'active' induces active sidebar menu display state:
  function active() {
    nav.className = 'active';
    // nav.style.display = 'block';
    glyph.style.color = 'White';
    glyph.style.transform = 'rotate(90deg)';
  }

  // Function 'inactive' induces inactive sidebar menu display state:
  function inactive() {
    nav.className = 'inactive';
    // nav.style.display = 'none';
    glyph.style.color = 'rgb(79, 152, 201)';
    glyph.style.transform = 'rotate(0deg)';
  }

  // Ternary conditional to change or revert based on present state of navigation menu sidebar:
  nav.style.display !== 'block' ? active() : inactive();

  // Event listener controls automated closure of navigation menu sidebar on outside click event:
  window.addEventListener('mouseup', function(evt) {
    if (evt.target != nav && evt.target.parentNode != nav && evt.target !== glyph) {
      inactive();
    }
  });
};


export default class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div id="nav-bar">
        <span
          id="hamburger-icon"
          onClick={ toggleNav }
          data-charRef="HTML Character, Heaven Trigram (a.k.a. the 'hamburger' icon): ☰">&#9776;</span>
        <div id="nav-links-wrapper">
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
