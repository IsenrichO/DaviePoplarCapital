'use strict';
import React from 'react';
import { Link } from 'react-router';

import VCard from '../public/resources/Ralph Isenrich CFA.vcf';
import ContactInfo from './constants/json/ContactInfoData.json';
import LocationInfo from './constants/json/LocationInfoData.json';
import ContactInfoBox from './components/partials/ContactInfoBox';


/* True constants
 * -------------------------- */

const CONTACT_INFO_MAP = new Map([
  ['personal', {
    targetURL: VCard,
    infoData: ContactInfo
  }],
  ['corporate', {
    targetURL: 'http://eepurl.com/_30or',
    infoData: LocationInfo
  }]
]);

const INFO_MAP = new Map([
  ['name', 'user-circle'],
  ['email', 'envelope'],
  ['phone', 'phone-square']
]);

const ROUTES_MAP = [
  {
    destination: 'Home',
    target: '/'
  }, {
    destination: 'About',
    target: 'about'
  }, {
    destination: 'Focus',
    target: 'focus'
  }, {
    destination: 'Contact',
    target: 'contact'
  }
];

export { CONTACT_INFO_MAP, INFO_MAP, ROUTES_MAP };


/* Focus component
 * -------------------------- */

// Utility function maps JSON data into series of unordered list elements:
const renderParameters = (params) => params.map((param, index, list) =>
  <li key={ `LI_id${index}` }>{ param }</li>
);

// Utility function maps data into <div>s with the output of `renderParameters`:
const renderSections = (data) => data.map((datum, index, list) => 
  <div className="third" key={ `DIV_id${index}` }>
    <h4 className="sector">{ datum.sector }</h4>
    <ul>{ renderParameters(datum.parameters) }</ul>
  </div>
);

export { renderParameters, renderSections };


/* Contact component
 * -------------------------- */

// Returns FontAwesome icon conditionally wrapped in a containing anchor tag with URL scheme:
const renderContactIcons = (datum) => datum.scheme ? (
  <a
    href={ datum.scheme }
    rel="nofollow"
    target="_blank"
    title={ datum.tooltip }>
    <i className={ `fa fa-${INFO_MAP.get(datum.type)}` } />
  </a>
) : datum.type ? (
  <i className={ `fa fa-${INFO_MAP.get(datum.type)}` } />
) : null;

// Maps icons output from `renderContactIcons` alongside associated text content:
const renderContactText = (data) => data.map((datum, index) =>
  <p key={ `ContactInfo_${index}` }>
    {[
      renderContactIcons(datum),
      datum.hasOwnProperty('value') ? datum.value : datum
    ]}
  </p>
);

// Maps paragraph output for `renderContactText` inside <div> with associated anchor tag:
const renderContactInfo = (data) => data.map((datum, index) =>
  <ContactInfoBox
    anchorTarget={ CONTACT_INFO_MAP.get(datum.type).targetURL }
    infoData={ CONTACT_INFO_MAP.get(datum.type).infoData }
    linkData={ datum } />
);

export { renderContactIcons, renderContactText, renderContactInfo };



/* NavBar component
 * -------------------------- */

const toggleNavClasses = (nav) => {
  !nav.classList.length
    ? nav.classList.add('active')
    : ['active', 'inactive'].forEach(navClass => nav.classList.toggle(navClass));
};

// Function `activate` induces active sidebar menu display state:
const activate = (glyph, nav) => {
  toggleNavClasses(nav);
  glyph.style.textShadow = 'none';
  glyph.style.color = '#FFF';
  glyph.style.transform = 'rotate(90deg)';
};

// Function `deactivate` induces inactive sidebar menu display state:
const deactivate = (glyph, nav) => {
  toggleNavClasses(nav);
  glyph.style.color = '#4F98C9';
  glyph.style.transform = 'rotate(0deg)';
  glyph.style.textShadow = '0 0 6px #FFF';
};

// Includes a bullet character denoting the tab matching the user's current route:
const detectCurrentRoute = (route) => {
  const [HASH, HASH_PATTERN] = [document.location.hash, new RegExp(`^#.+`)],
        currRoute = (HASH_PATTERN.test(HASH) ? HASH.match(HASH_PATTERN)[0].substr(1) : null),
        routeName = `${currRoute.charAt(0).toUpperCase()}${currRoute.slice(1)}`;
  return (routeName && routeName === `/${route.target}`.replace(/^(\/){2,}/, '$1')
    ? '\u25CB \u00A0'
    : '') + route.destination;
};

// Controls sidebar navigation menu display and behavior:
const executeNavAction = (evt, glyph, nav) => {
  (nav.classList.contains('active') && evt.target !== nav && evt.target.parentNode !== nav)
  || (nav.classList.contains('active') && evt.target === glyph)
    ? deactivate(glyph, nav) : evt.target === glyph
    ? activate(glyph, nav)
    : null;
};

// Maps link data to a series of routes for intra-site navigation:
const renderNavLinks = (links) => links.map((link, index) =>
  <Link
    to={ link.target }
    data-route={ link.destination }
    rel={ !index ? 'prev' : 'next' }>
    { detectCurrentRoute(link) }
  </Link>
);

export { activate, deactivate, detectCurrentRoute, executeNavAction, renderNavLinks };



/* Miscellaneous functions
 * -------------------------- */

// Future proofs site footer text by dynamically assessing the current year for copyright purposes:
const appendCopyright = () => {
  let currentYear = new Date().getFullYear();
  return `Copyright ${String.fromCharCode(169)} ${currentYear} \
              Davie Poplar Capital, LLC. | All Rights Reserved`;
};

// Dynamically assigns `className` contingent on the hash of the current route:
const assignClassNames = (el) => el.className = 'main-content'
  + (/^#\/$/.test(document.location.hash) ? ' home' : ` ${document.location.hash.match(/\w+/gi)}`);

// Returns CapitalCased string from hyphen-delimited string input:
const toCapsCase = (str) => str
  .split(/-/)
  .map(val => `${val.charAt(0).toUpperCase()}${val.substr(1)}`)
  .join('');

export { appendCopyright, assignClassNames, toCapsCase };
