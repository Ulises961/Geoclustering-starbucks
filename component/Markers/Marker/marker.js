import React, { useCallback, useState } from 'react';
import {Circle , Popup, FeatureGroup}from 'react-leaflet';
import "./marker.module.css";
import 'leaflet/dist/leaflet.css';


const Point = (props) => {

    let zoneOptions = { 
        color:props.color, 
        fillColor:props.color};
    


    return (
        <FeatureGroup>
        <Circle
            center= {props.position}
            pathOptions={zoneOptions}
            radius={5000}
            stroke={true}
            draggable={true}
           
            
         />
         <Popup> 
            Starbucks <br></br>
            Address: {props.addr} <br></br>
            City: {props.city}<br></br>
            Sqmt: {props.meters} <br></br>
            <button onClick={props.clicked}>Calculate Means</button>
         </Popup>
          
         </FeatureGroup>
    );

}

export default Point;