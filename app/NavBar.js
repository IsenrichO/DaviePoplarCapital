'use strict';
import React, { Component } from 'react';

const NavBar = () => (
  // HTML Character, Heaven Trigram (a.k.a. the "hamburger" icon): ☰  -->
  <div id="nav-bar">
    <span id="dropDown_Btn" onclick="toggleNav()">&#9776;</span>        
    <div id="navBar_Cont">
      <nav
        id="inter-pageNavBar"
        data-styleRef="color: White; text-shadow: 0 0 5px White;">
        <a
          href="index.html"
          style="color: rgb(79, 152, 201); background: White;"
          data-targetRef="http://www.daviepoplarcapital.com/new-home.html">&nbsp;Home</a> 
        <a
          href="About.html"
          data-targetRef="http://www.daviepoplarcapital.com/about.html">&nbsp;About</a>
        <a
          href="Focus.html"
          data-targetRef="http://www.daviepoplarcapital.com/focus.html">&nbsp;Focus</a>
        <a
          href="Contact.html"
          data-targetRef="http://www.daviepoplarcapital.com/contact.html">&nbsp;Contact</a>
      </nav>
    </div>
  </div>
);

export default NavBar;
