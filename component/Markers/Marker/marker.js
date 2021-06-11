import React from 'react';
import {Circle , Popup, FeatureGroup}from 'react-leaflet';
import "./marker.module.css";
import 'leaflet/dist/leaflet.css';


const Point = (props) => {

    const zoneOptions = { 
        color:props.color, 
        fillColor:props.color};
  

    return (
        <FeatureGroup>
        <Circle
            center= {props.position}
            pathOptions={zoneOptions}
            radius={200}
            stroke={true}
            draggable={true}
            
         />
         <Popup><p>{props.addr}</p><p>{props.city}</p><p>{props.sqm}</p></Popup>
      
         </FeatureGroup>
    );

}

export default Point;