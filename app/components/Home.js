'use strict';
import React from 'react';
import { Link } from 'react-router';

import DPCLogo from '../constants/svg/DPCLogo_SVG';
import Footer from './Footer';


const Home = () => (
  <div className="center-cont home">
    <Link to="about">
      <DPCLogo />
    </Link>
  </div>
);

export default Home;
