'use strict';
import React from 'react';

import LinkedInLogo from '../../constants/svg/LinkedInLogo_SVG';
import EmailGlyph from '../../constants/svg/EmailGlyph_SVG';
import { appendCopyright } from '../../Mixins';


const Footer = () => (
  <footer className="footer">
    <p id="copyright_Par">{ appendCopyright() }</p>
    <div className="social-share">
      <a
        href="https://www.linkedin.com/in/isenrichr"
        target="_blank">
        <LinkedInLogo />
      </a>
      <a
        href="mailto:ralph@daviepoplarcapital.com"
        style={{ left: '0' }}>
        <EmailGlyph />
      </a>
    </div>
  </footer>
);

export default Footer;
