'use strict';
import React from 'react';

import LinkedInLogo from '../constants/svg/LinkedInLogo_SVG';


// Function
(window.onload = function() {
  (function appendCopyright() {
    let currentYear = new Date().getFullYear(),
        nodeText = `Copyright ${String.fromCharCode(169)} ${currentYear} \
                    Davie Poplar Capital, LLC. | All Rights Reserved`,
        copyrightText_Node = document.createTextNode(nodeText);
    document.getElementById('copyright_Par').appendChild(copyrightText_Node);
  })();
});

const Footer = () => (
  <footer>
    <p id="copyright_Par" />
    <div>
      <a
        className="footer_linkedInCont footer_SocialShare"
        href="https://www.linkedin.com/in/isenrichr"
        target="_blank">
        <LinkedInLogo />
      </a>
      <a
        className="footer_emailCont footer_SocialShare"
        href="mailto:ralph@daviepoplarcapital.com"
        style={{ left: '0' }}>
        <img
          id="footer_emailGlyph"
          src="../public/images/Logo.png"
          alt="Email social share icon (MediumSeaGreen)"
          onMouseOut={ () => revertPic('footer_emailGlyph') } />
      </a>
    </div>
  </footer>
);

export default Footer;


// Copyright &#169; 2016 Davie Poplar Capital, LLC. | All Rights Reserved
// Hex Character Code: © = "&#169;"

// <a className="footer_linkedInCont footer_SocialShare" href="https://www.linkedin.com/in/isenrichr" target="_blank;">
//   <img id="footer_linkedInGlyph_Home" src="Graphics/LinkedIn Logo (Blue).svg" alt="LinkedIn social media platform corporate logo (Blue)" onmouseout="revertPic('footer_linkedInGlyph_Home')" />
// </a>

