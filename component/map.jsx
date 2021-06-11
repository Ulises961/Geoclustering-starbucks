import React,{Component} from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import mapstyles from "./map.module.css";
import Cluster from './Markers/markers';

class Map extends Component {

 

  render(){
    return  (
    <MapContainer
        className={mapstyles.map}
        center={[48.00, 16.38]}
        zoom={9}
        dragging={true}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      <Cluster />
      </MapContainer>
    );
  }
}

export default Map;
