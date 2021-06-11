import React, { useCallback } from 'react';
import {Circle , Popup, FeatureGroup}from 'react-leaflet';
import "./marker.module.css";
import 'leaflet/dist/leaflet.css';
import coloredMarkers from './../../../Data/points.json'
import showFunc from './../../../Data/DataAnalysis';

const Point = (props) => {

    const zoneOptions = { 
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
         <Popup><span onClick={props.clicked}> Starbucks <br></br>Address: {props.addr} <br></br>City: {props.city}<br></br>Sqmt: {props.sqmt}</span></Popup>
      
         </FeatureGroup>
    );

}

export default Point;