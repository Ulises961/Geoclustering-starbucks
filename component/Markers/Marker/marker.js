import React, { useCallback, useState } from 'react';
import {Circle , Popup, FeatureGroup}from 'react-leaflet';
import "./marker.module.css";
import 'leaflet/dist/leaflet.css';


const Point = (props) => {

    let zoneOptions = { 
        color:props.color, 
        fillColor:'red'};
    


    return (
        <FeatureGroup>
        <Circle
            center= {props.position}
            pathOptions={zoneOptions}
            radius={200}
            stroke={true}
            draggable={true}
           
            
         />
         <Popup> 
            Starbucks <br></br>
            Address: {props.addr} <br></br>
            City: {props.city}<br></br>
            Sqmt: {props.meters}
            
         </Popup>
          
         </FeatureGroup>
    );

}

export default Point;