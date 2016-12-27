'use strict';
import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker, InfoWindow } from 'react-google-maps';

import GoogleMapStyles from '../../constants/json/GoogleMapStyles.json';
import LocationInfo from '../../constants/json/LocationInfoData.json';
import { renderContactText } from '../../Mixins';


export default class GMap extends Component {
  constructor(props) {
    super(props);
    this.addMarker = this.addMarker.bind(this);
    this.handleInfoWindowDisplayState = this.handleInfoWindowDisplayState.bind(this);
    this.handleMarkerAnimation = this.handleMarkerAnimation.bind(this);
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.renderInfoWindow = this.renderInfoWindow.bind(this);
    this.state = {
      DPC_Coords: new google.maps.LatLng({ lat: 35.875751, lng: -78.642080 }),
      infoWindowActive: false,
      markerAnimation: google.maps.Animation.DROP
    };
  }

  // Produces custom-styled map marker pin atop DPC's geographical coordinates:
  addMarker() {
    return (
      <Marker
        ref="marker"
        position={ this.state.DPC_Coords }
        animation={ this.state.markerAnimation }
        icon={{
          path: 'M61.5,0 C91,0 125,24.5 125,62.5 C125,94.5181999 78,185.5 61.5,185.5 C45,185.5 0,102.807291 0,62.5 C0,25 32,0 61.5,0 Z M63,96 C81.7776815,96 97,80.7776815 97,62 C97,43.2223185 81.7776815,28 63,28 C44.2223185,28 29,43.2223185 29,62 C29,80.7776815 44.2223185,96 63,96 Z',
          scale: 1 / 4,
          size: new google.maps.Size(1550, 10),
          anchor: new google.maps.Point(0, 130),
          fillColor: '#000',
          fillOpacity: 1
        }}
        onClick={ () => this.handleMarkerClick() }
        >
        { this.state.infoWindowActive ? this.renderInfoWindow() : null }
      </Marker>
    );
  }

  // Deactivates the display state of the clicked-upon map marker item's InfoWindow:
  handleInfoWindowDisplayState(bool) {
    this.setState({ infoWindowActive: bool !== undefined ? bool : !this.state.infoWindowActive });
  }

  handleMarkerAnimation() {
    // this.state.infoWindowActive ? marker.setAnimation(google.maps.Animation.BOUNCE) : marker.setAnimation(null);
    this.infoWindowActive ? this.setState({ markerAnimation: google.maps.Animation.BOUNCE }) : this.setState({ markerAnimation: null });
  }

  handleMarkerClick() {
    this.handleInfoWindowDisplayState();
    this.handleMarkerAnimation();
  }

  // Controls the content of map marker items' InfoWindow dialogue boxes:
  renderInfoWindow() {
    return (
      <InfoWindow onCloseclick={ this.handleInfoWindowDisplayState } >
        <div className="info-window">
          <h4>Davie Poplar Capital</h4>
          <hr />
          { renderContactText(LocationInfo.slice(1)) }
        </div>
      </InfoWindow>
    );
  }

  render() {
    return (
      <GoogleMapLoader
        containerElement={ <div id="maps-container" /> }   
        googleMapElement={
          <GoogleMap 
            ref="map"
            defaultCenter={ this.state.DPC_Coords }
            defaultZoom={ 14 }
            defaultOptions={{
              styles: GoogleMapStyles,
              mapTypeControl: false
            }}
            onClick={ () => this.handleInfoWindowDisplayState(false) }>
            { this.addMarker() }
          </GoogleMap>
        } />
    );
  }
};
