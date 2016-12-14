// 'use strict';
import React, { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="centerFill">
        <h3>Davie Poplar Capital is a Raleigh-based private investment firm</h3>
        <div style={{ background: '#FFF', width: '100%' }}>
          <p className="about_Par" style={{ margin: '5% 0' }}>
          Davie Poplar Capital (DPC) is a Raleigh, NC based private investment firm that acquires, operates, and grows established private businesses.  We make controlling investments in small and mid-sized profitable companies that are based in or relocatable to North and South Carolina.
          
          <br />
          <br />

          Davie Poplar is led by Ralph Isenrich. Prior to founding DPC, Ralph worked in middle market private equity at Blue Point Capital Partners and investment banking at Wells Fargo Securities.  Ralph is a CFA Charterholder and a graduate of the University of North Carolina at Chapel Hill.</p>
        </div>
      </div>
    );
  }
};

export default About;
