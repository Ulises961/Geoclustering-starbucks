import React,{Component} from "react";
import { MapContainer, TileLayer, SVGOverlay, LayerGroup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import mapstyles from "./map.module.css";
import Cluster from './Markers/markers';
import showFunc from './../Data/DataAnalysis';

const Map = (props) => {


    console.log("[Map.js] state.markers: ",props.markers);

    return  (
     
    <MapContainer
    
        className={mapstyles.map}
        center={[50.9, 4.4]}
        zoom={10}
        dragging={true}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
       
        <Cluster markers = {props.markers} />
   
      </MapContainer>
      
    );
  }


export default Map;
