'use strict';
import React from 'react';

import LinkedInLogo from '../../constants/svg/LinkedInLogo_SVG';
import EmailGlyph from '../../constants/svg/EmailGlyph_SVG';


// Utility functions future proofs copyright year:
const appendCopyright = () => {
  let currentYear = new Date().getFullYear();
  return `Copyright ${String.fromCharCode(169)} ${currentYear} \
              Davie Poplar Capital, LLC. | All Rights Reserved`;
};

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
