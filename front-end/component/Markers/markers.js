import MyMarker from "./Marker/marker";

export default function Markers ({ markers}) {
  console.log("Markers.js",markers);
  return markers.map((marker) => {
    return (
      <MyMarker
        position={[marker.lat, marker.lon]}
        color={marker.color}
        key={(marker.shop_id)}
        addr={marker.address}
        city={marker.city}
        meters={marker.sqmt}
      />
    );
  });
};

