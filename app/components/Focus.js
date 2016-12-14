'use strict';
import React from 'react';

import BusinessFocusData from '../constants/json/BusinessFocusData.json';


const renderParameters = (params) => params.map((param, index, list) =>
        <li key={ `LI_id${index}` }>{ param }</li>
      ),
      renderSections = (data) => data.map((datum, index, list) => 
        <div className="third" key={ `DIV_id${index}` }>
          <h2>{ datum.sector }</h2>
          <ul>{ renderParameters(datum.parameters) }</ul>
        </div>
      );

const Focus = () => (
  <div className="center-cont">
    <h3>DPC invests in businesses within the following parameters</h3>
    <div style={{ paddingBottom: '25px' }}>
      { renderSections(BusinessFocusData) }
    </div>
  </div>
);

export default Focus;
