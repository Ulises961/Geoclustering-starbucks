import React, { useCallback, useEffect, useState } from 'react';
import {Circle , Popup, FeatureGroup, Marker}from 'react-leaflet';
import * as L from "leaflet";
import "./marker.module.css";
import 'leaflet/dist/leaflet.css';


export default function Point(props) {

    const zoneOptions = { 
        color:props.color, 
        fillColor:props.color};
    
        const LeafIcon = L.Icon.extend({
            options: { 
              
                shadowSize:   [50, 64],
                iconAnchor:   [12, 40],
                shadowAnchor: [4, 62],
                popupAnchor:  [-3, -76],
                shadowUrl:  "/marker-icons/shadow.png"}
          });

          const orangeIcon = new LeafIcon({
            iconUrl: "/marker-icons/orange-marker.png",
           
          }),
          greenIcon = new LeafIcon({
            iconUrl:"/marker-icons/green-marker.png",
         
          }),
          redIcon = new LeafIcon({
            iconUrl: "/marker-icons/red-marker.png",
          }),

          blueIcon = new LeafIcon({
            iconUrl: "/marker-icons/blue-marker.png",
          });
            //  Use the state hook:
        const [icon, setIcon] = useState(blueIcon);
        
       

    useEffect(() => {
        switch(props.color){

        case "green": setIcon((icon)=> icon = greenIcon);
          break;
        case "orange": setIcon((icon)=> icon = orangeIcon);
          break;
        case "red": setIcon((icon)=> icon = redIcon);
          break;
      }
       
            
    },[props]);
     
    return (
      <FeatureGroup>
        <Marker 
          icon={icon}
          position = {props.position}
       
          >
        <Circle
            center= {props.position}
            pathOptions={zoneOptions}
            radius={200}
            stroke={true}
         />
         <Popup> 
            Starbucks <br></br>
            Address: {props.addr} <br></br>
            City: {props.city}<br></br>
            Sqmt: {props.meters}
            
         </Popup>
         </Marker>
          
         </FeatureGroup>
    );

}
