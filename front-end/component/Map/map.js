import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import Cluster from "../Markers/markers";
import Home from "../../pages";
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
  map:{
    height: '100%',
    width: '100%'

  },
});

const Map = (props) => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (!map || !props.shop) return;

    map.setView([props.shop.lat, props.shop.lon], 15);
  }, [Home, map]);

  const classes = useStyles();

  return (
    <MapContainer
      className={classes.map}
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

      <Cluster markers={props.markers} />
    </MapContainer>
  );
};

export default Map;
