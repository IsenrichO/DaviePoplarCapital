'use strict';
import React, { Component } from 'react';

const DPCLogo = () => (
  <svg
    width="570px"
    height="275px"
    style={{
      background: 'rgba(79, 152, 201, 0.75)',
      letterSpacing: '3px'
    }}>
    <text
      x="50%"
      y="52.5%"
      textAnchor="middle"
      style={{
        font: 'bold 100px/110px Georgia, sans-serif',
        fill: '#FFF',
        textAlign: 'center'
      }}>DPC</text>
    <text
      x="50%"
      y="72.5%"
      textAnchor="middle"
      fill="White"
      style={{
        font: 'small-caps lighter 35px/35px Georgia, sans-serif',
        stroke: 'none',
        textAlign: 'center'
      }}>Davie Poplar Capital</text>
    <line
      x1="135px"
      y1="60%"
      x2="435px"
      y2="60%"
      style={{
        stroke: '#FFF',
        strokeWidth: '1'
      }} />
    <line
      x1="135px"
      y1="77.5%"
      x2="435px"
      y2="77.5%"
      style={{
        stroke: '#FFF',
        strokeWidth: '1'
      }} />
    Oh no! Your browser does not support inline SVG elements. Maybe try Chrome.
  </svg>
);

export default DPCLogo;
