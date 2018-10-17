import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'


class ClubMap extends React.Component {

  render() {
   // lat: 38.8299196, lng: 20.7036168
    const position = [38.3345123, -99.5218668];
    const nevada = [38.0582213, -115.6058512];
    const phoenix = [42.500, -107.600];
    const dallas = [37.8155573, -108.4803483];

    const clubs = [
      {location: nevada, title: 'Club of nevada'},
      {location: phoenix, title: 'Club of phoenix'},
      {location: dallas, title: 'Club of Dallas'}];

    const markers = clubs.map((club, i)=>{
      return (
        <Marker position={club.location} key={i}>
          <Popup>{club.tititle}</Popup>
        </Marker>)
    });


    return(
      <div style={{height: '400px', overflow: 'hidden', minWidth: '200px', display: 'inline-block', width: '100%'}}>
        <Map center={position} zoom={5.25} style={{height: "400px"}}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          {markers}
        </Map>
      </div>
    )
  }
}

export default ClubMap;