'use strict';
import React from 'react';

import GMap from './partials/GMap';
import ContactInfo from '../constants/json/ContactInfoData.json';
import LocationInfo from '../constants/json/LocationInfoData.json';
// import vCard from '../../public/resources/Ralph Isenrich CFA.vcf';


const INFO_MAP = new Map([
  ['name', 'user-circle'],
  ['email', 'envelope'],
  ['phone', 'phone-square']
]);

const renderContactIcons = (datum) => datum.scheme ? (
  <a
    href={ datum.scheme }
    target="_blank"
    title={ datum.tooltip }>
    <i className={ `fa fa-${INFO_MAP.get(datum.type)}` } />
  </a>
) : datum.type ? (
  <i className={ `fa fa-${INFO_MAP.get(datum.type)}` } />
) : null;

const renderContactInfo = (data) => data.map((datum, index) =>
  <p key={ `ContactInfo_${index}` }>
    {[
      renderContactIcons(datum),
      datum.hasOwnProperty('value') ? datum.value : datum
    ]}
  </p>
);

const Contact = () => (
  <div className="flexbox-col contact">
    <div className="center-cont">
      <h3>Please contact us to discuss investment opportunities</h3>
      <div className="wrapper">
        <div className="flex-contact">
          <div className="info">{ renderContactInfo(ContactInfo) }</div>
          <a
            className="primary-btn"
            href="../../public/resources/Ralph Isenrich CFA.vcf"
            // href={ vCard }
            target="_blank"
            download="Ralph Isenrich, CFA">
            {[
              <i
                key={ `FAIcon_AddressCard` }
                className="fa fa-address-card invert" />,
              'Download vCard'
            ]}
          </a>
        </div>

        <div className="flex-contact">
          <div className="info">
            { renderContactInfo(LocationInfo) }
          </div>
          <a
            className="primary-btn"
            href="http://eepurl.com/_30or"
            target="_blank">
            {[
              <i
                key={ `FAIcon_Newspaper` }
                className="fa fa-newspaper-o invert" />,
              'Subscribe for News & Updates'
            ]}
          </a>
        </div>
      </div>
    </div>

    <GMap />
  </div>
);

export default Contact;


// <a href="http://daviepoplarcapital.us9.list-manage1.com/vcard?u=247467094ede56ac669e80467&id=db8a047686" target="_parent">Download vCard</a>

// G-Maps URL:  https://www.google.com/maps/place/
// Ferro+Management+Group,+185+Wind+Chime+Ct+%23+201,+Raleigh,+NC+27615/@35.8761861,-78.6425212,19z/data=!3m1!4b1!4m2!3m1!1s0x89ac58133cd16d47:0xb239755f849eed8d?hl=en
