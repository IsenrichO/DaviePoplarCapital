'use strict';
import React from 'react';

import BusinessFocusData from '../constants/json/BusinessFocusData.json';


const renderParameters = (params) => params.map((param, index, list) =>
        <li key={ `LI_id${index}` }>{ param }</li>
      ),
      renderSections = (data) => data.map((datum, index, list) => 
        <div className="third" key={ `DIV_id${index}` }>
          <h4 className="sector">{ datum.sector }</h4>
          <ul>{ renderParameters(datum.parameters) }</ul>
        </div>
      );

const Focus = () => (
  <div className="center-cont focus">
    <h3>DPC invests in businesses within the following parameters</h3>
    <div className="info">
      { renderSections(BusinessFocusData) }
    </div>
  </div>
);

export default Focus;
