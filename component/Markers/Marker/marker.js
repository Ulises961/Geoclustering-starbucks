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
                iconAnchor:   [12.5, 40],
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
          });
            //  Use the state hook:
        const [icon, setIcon] = useState(redIcon);
        
       

    useEffect(() => {
        
        if(props.color === "green")
        setIcon((icon)=> icon = greenIcon);
        else if (props.color === "orange")
            setIcon((icon)=> icon = orangeIcon);
    },[props]);
     
    return (
      <FeatureGroup>
        <Marker 
          icon={icon}
          position = {props.position}
          draggable={true}>
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
