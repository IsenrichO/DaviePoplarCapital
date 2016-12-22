'use strict';
import React from 'react';
import { Link } from 'react-router';


// True constants
// --------------------------

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

const INFO_MAP = new Map([
  ['name', 'user-circle'],
  ['email', 'envelope'],
  ['phone', 'phone-square']
]);

export { ROUTES_MAP, INFO_MAP };


// Focus component
// --------------------------

// Utility function maps JSON data into series of unordered list elements:
const renderParameters = (params) => params.map((param, index, list) =>
  <li key={ `LI_id${index}` }>{ param }</li>
);

const renderSections = (data) => data.map((datum, index, list) => 
  <div className="third" key={ `DIV_id${index}` }>
    <h4 className="sector">{ datum.sector }</h4>
    <ul>{ renderParameters(datum.parameters) }</ul>
  </div>
);

export { renderParameters, renderSections };


// Contact component
// --------------------------


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

export { renderContactIcons, renderContactInfo };


// NavBar component
// --------------------------

// Function `activate` induces active sidebar menu display state:
const activate = (glyph, nav) => {
  nav.classList.toggle('active');
  glyph.style.textShadow = 'none';
  glyph.style.color = '#FFF';
  glyph.style.transform = 'rotate(90deg)';
};

// Function `deactivate` induces inactive sidebar menu display state:
const deactivate = (glyph, nav) => {
  nav.classList.toggle('active');
  glyph.style.color = '#4F98C9';
  glyph.style.transform = 'rotate(0deg)';
  glyph.style.textShadow = '0 0 6px #FFF';
};

// 
const detectCurrentRoute = (route) => {
  const [HASH, HASH_PATTERN] = [document.location.hash, new RegExp(`^#.+`)],
        currRoute = (HASH_PATTERN.test(HASH) ? HASH.match(HASH_PATTERN)[0].substr(1) : null),
        routeName = `${currRoute.charAt(0).toUpperCase()}${currRoute.slice(1)}`;
  return (routeName && routeName === `/${route.target}`.replace(/^(\/){2,}/, '$1')
    ? '\u25CB \u00A0'
    : '') + route.destination;
};

// Control of sidebar navigation menu display and behavior:
const executeNavAction = (evt, glyph, nav) => {
  (nav.classList.contains('active') && evt.target !== nav && evt.target.parentNode !== nav)
  || (nav.classList.contains('active') && evt.target === glyph)
    ? deactivate(glyph, nav) : evt.target === glyph
    ? activate(glyph, nav)
    : null;
};

const renderNavLinks = (links) => {
  return links.map((link, index) =>
    <Link
      to={ link.target }
      data-route={ link.destination }>
      { detectCurrentRoute(link) }
    </Link>
  );
};

export { activate, deactivate, detectCurrentRoute, executeNavAction, renderNavLinks };


// Footer component
// --------------------------

// Utility functions future proofs copyright year:
const appendCopyright = () => {
  let currentYear = new Date().getFullYear();
  return `Copyright ${String.fromCharCode(169)} ${currentYear} \
              Davie Poplar Capital, LLC. | All Rights Reserved`;
};

// MainLayout component
// --------------------------


const assignClassNames = (el) => el.className = 'main-content'
  + (/^#\/$/.test(document.location.hash) ? ' home' : ` ${document.location.hash.match(/\w+/gi)}`);


export { appendCopyright, assignClassNames };
