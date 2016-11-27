// 'use strict';
import React, { Component } from 'react';
import { withGoogleMap, GoogleMapLoader, GoogleMap, Marker, InfoWindow } from 'react-google-maps';

import GoogleMapStyles from '../constants/json/GoogleMapStyles.json';


// const SimpleMapExampleGoogleMap = withGoogleMap(props => (
//   <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{ lat: -34.397, lng: 150.644 }} />
// ));


export default class GMap extends Component {
  render() {
    return (
      <GoogleMapLoader
        containerElement={ <div id='maps-container' /> }   
        googleMapElement={
          <GoogleMap 
            defaultCenter={{ lat: 35.876172, lng: -78.641958 }}
            defaultZoom={ 14 } 
            defaultOptions={{ styles: GoogleMapStyles }}
            ref='map'>
          </GoogleMap>
        } />
    );
  }
};
