import React,{ useEffect, useState} from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import mapstyles from "./map.module.css";
import Cluster from '../Markers/markers';
import Home from "../../pages";

const Map = (props) => {

    const[map, setMap]= useState(null);
   // console.log("[Map.js] state.markers: ",props.markers);
    


  useEffect(() => {
    if(!map || !props.shop) return;
    // map.flyTo([props.shop.Lat, props.shop.Lon],15);
    map.setView([props.shop.Lat, props.shop.Lon],15)
  
    },[Home,map]);

    return  (
     
    <MapContainer
    
        className={mapstyles.map}
        center={[50.9, 4.4]}
        zoom={2}
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
