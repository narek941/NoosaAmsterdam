import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
const mapStyles = {
    width: '100%',
    height: '100%'
  };

const MapGoogle = (props) => {

  return(
     <Map
        google={props.apiKey}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: -1.2884,
            lng: 36.8233
          }
        }
      />
  )
}
export default GoogleApiWrapper({
    apiKey: 'MjohDezE39pNjywAG-4_uRqd8SLooV10V4vVnvDxhK0'
  })(MapGoogle);
   