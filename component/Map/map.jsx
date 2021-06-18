import React,{Component, useEffect, useState} from "react";
import { MapContainer, TileLayer, SVGOverlay, LayerGroup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import mapstyles from "./map.module.css";
import Cluster from '../Markers/markers';
import showFunc from '../../Data/DataAnalysis';
import Home from "../../pages";
import Shop from "../Cards";
const Map = (props) => {

    const[map, setMap]= useState(null);
   // console.log("[Map.js] state.markers: ",props.markers);
    


  useEffect(() => {
    if(!map || !props.shop) return;
    map.flyTo([props.shop.Lat, props.shop.Lon],15);
    // map.setView([props.shop.Lat, props.shop.Lon],15)
    console.log("props.lat ",props.shop.Lat, "props.lon ",props.shop.Lon);
    }, [map]);

    return  (
     
    <MapContainer
    
        className={mapstyles.map}
        center={[50.9, 4.4]}
        zoom={10}
        dragging={true}
        scrollWheelZoom={true}
        whenCreated={setMap}
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
