import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import styles from './Map.module.css';

const LocationPin = ({ text }) => (
  <div className="pin">
    <LocationOnIcon className={styles.pinIcon} />
    <p className={styles.pinText}>{text}</p>
  </div>
)

const Map = ({ location, zoomLevel }) => {
  return(
  <div className={styles.map}>
   <div className={styles.googleMap}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyAjyh7h3cKKPMzejGlgqb1S5Iz98S1r2mw'}}
      defaultCenter={{lat:location.lat,lng:location.lng}}
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