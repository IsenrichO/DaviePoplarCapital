'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router';

import DPCLogo from '../constants/svg/DPCLogo_SVG';
import Footer from './Footer';


const Home = () => (
  <div id="centerFill">
    <Link to="about">
      <DPCLogo />
    </Link>
  </div>
);

export default Home;
