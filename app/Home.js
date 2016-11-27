'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router';

import DPCLogo from './constants/svg/DPCLogo_SVG';
import Footer from './Footer';


const Home = () => (
  <div>
    <main>
      <div id="centerFill">
        <Link to="about">
          <DPCLogo />
        </Link>
      </div>
    </main>
    <Footer />
  </div>
);

export default Home;


// <a href="About.html">
// </a>
