import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';

const   mapStyles = {
    width: '100%',
    height: '100%',
  };

class GoogleMap extends Component { 

    render() { 
        return ( 
            <Map
            google={this.props.google}
            zoom={8}
            style={mapStyles}
            initialCenter={{ lat: 47.444, lng: -122.176}}
          >
            <Marker position={{ lat: 48.00, lng: -122.00}} />
        </Map>
         );
    }
}
 
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyCHvmrrnGMc98RpImYu1ogXXAugFJGH2s8'
  })(GoogleMap);