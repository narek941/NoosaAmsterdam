import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import './Map.css';

const LocationPin = ({ text }) => (
  <div className="pin">
    <LocationOnIcon className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
)

const Map = ({ location, zoomLevel }) => {
  return(
  <div className="map">
   <div className="google-map">
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyAjyh7h3cKKPMzejGlgqb1S5Iz98S1r2mw' }}
      defaultCenter={location}
      defaultZoom={zoomLevel}
    >
      <LocationPin
        lat={location.lat}
        lng={location.lng}
        text={location.address}
      />
    </GoogleMapReact>
  </div>
</div>);

}

export default Map;