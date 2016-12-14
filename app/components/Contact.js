'use strict';
import React from 'react';

import GMap from './GMap';


const Contact = () => (
  <div className="flexbox-col">
    <div className="center-cont">
      <h3>Please contact us to discuss investment opportunities</h3>
      <div style={{ background: '#FFF', width: '100%', height: '175px' }}>
        <div className="flex-contact">
          <p>
            {[
              <i key={ `FAIcon_User` } className="fa fa-user-circle" />,
              `Ralph Isenrich, CFA`
            ]}
          </p>
          <p>
            {[
              <i key={ `FAIcon_Envelope` } className="fa fa-envelope" />,
              `ralph@daviepoplarcapital.com`
            ]}
          </p>
          <p>
            {[
              <i key={ `FAIcon_Phone` } className="fa fa-phone-square" />,
              `(m) +1 (919) 334-8367`
            ]}
          </p>
          <a
            className="primary-btn"
            href="Resources/Ralph Isenrich CFA.vcf"
            download="Ralph Isenrich, CFA">
            {[
              <i key={ `FAIcon_AddressCard` } className="fa fa-address-card invert" />,
              `Download vCard`
            ]}
          </a>
        </div>
        <div className="flex-contact">
          <p>Davie Poplar Capital, LLC.</p>
          <p>185 Windchime Ct., Suite 201</p>
          <p>Raleigh, NC 27615</p>
          <a
            className="primary-btn"
            href="http://eepurl.com/_30or"
            target="_blank">
            {[
              <i key={ `FAIcon_Newspaper` } className="fa fa-newspaper-o invert" />,
              `Subscribe for News & Updates`
            ]}
          </a>
        </div>
      </div>
    </div>

    <GMap />
  </div>
);

export default Contact;


// <a href="mailto:ralph@daviepoplarcapital.com">ralph@daviepoplarcapital.com</a> <br /> -->

// <a href="http://daviepoplarcapital.us9.list-manage1.com/vcard?u=247467094ede56ac669e80467&id=db8a047686" target="_parent">Download vCard</a>

// G-Maps URL:  https://www.google.com/maps/place/
// Ferro+Management+Group,+185+Wind+Chime+Ct+%23+201,+Raleigh,+NC+27615/@35.8761861,-78.6425212,19z/data=!3m1!4b1!4m2!3m1!1s0x89ac58133cd16d47:0xb239755f849eed8d?hl=en

// onmouseenter="ent()" onmouseleave="leave()">

// <div>
//   <div style={{ display: 'block', height: '24px', width: '100%', position: 'relative' }}>
//     <p style={{ display: 'inline-block', float: 'left', position: 'relative', width: 'auto', font: '14px/24px Open Sans, sans-serif', margin: '0' }}>Ralph Isenrich, CFA</p>
//     <a
//       id="linkedIn_Cont"
//       href="https://www.linkedin.com/in/isenrichr"
//       target="_blank"
//       style={{ padding: '0', boxShadow: 'none', float: 'left', display: 'inline-block', width: '10%' }}>
//       <img
//         id="linkedIn_Glyph"
//         src="../public/images/LinkedIn Logo (Blue).svg"
//         alt="LinkedIn social media platform corporate logo (Blue)"
//         onMouseOut={ () => revertPic('linkedIn_Glyph') } />
//     </a>
//   </div>
// <div style={{ display: 'block', height: '24px', width: '100%', position: 'relative' }}>
//   <p style={{ display: 'inline-block', float: 'left', position: 'relative', width: 'auto', font: '1rem/24px Open Sans, sans-serif', margin: '0' }}>ralph@daviepoplarcapital.com</p>
//   <a
//     id="email_Cont"
//     href="mailto:ralph@daviepoplarcapital.com"
//     style={{ padding: '0', boxShadow: 'none', float: 'left', display: 'inline-block', width: '10%' }}>
//     <img
//       id="email_Glyph"
//       src="Graphics/Email Icon (Blue).png"
//       alt="Email social share icon (MediumSeaGreen)"
//       onMouseOut={ () => revertPic('email_Glyph') } />
//   </a>
// </div>

// <p style={{ display: 'block', marginLeft: '0' }}>(m) +1 (919) 334-8367</p>

// <div className="toolTip" id="toolTip">
//   <span className="DPC_Address">185 Windchime Ct, Suite 201</span>
//   <span className="DPC_Address">Raleigh NC 27615 US</span>
// </div>
