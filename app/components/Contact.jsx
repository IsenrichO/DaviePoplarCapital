'use strict';
import React from 'react';

import GMap from './partials/GMap';
import ContactInfo from '../constants/json/ContactInfoData.json';
import LocationInfo from '../constants/json/LocationInfoData.json';
import VCard from '../../public/resources/Ralph Isenrich CFA.vcf';
import { INFO_MAP, renderContactInfo } from '../Mixins';


const Contact = () => (
  <div className="flexbox-col contact">
    <div className="center-cont">
      <h3>Please contact us to discuss investment opportunities</h3>
      <div className="wrapper">
        <div className="flex-contact">
          <div className="info">{ renderContactInfo(ContactInfo) }</div>
          <a
            className="primary-btn"
            href={ VCard }
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
          <div className="info">{ renderContactInfo(LocationInfo) }</div>
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
