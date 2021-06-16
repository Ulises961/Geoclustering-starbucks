
import MyMarker from './Marker/marker';

const Markers = ({markers}) => {
    console.log(markers);
    return (
        markers.map((marker,index)=> { 
     
            return <MyMarker
                position= {[marker.Lat,marker.Lon]} 
                color={marker.Color}
                key = {index}
                addr = {marker.Address}
                city = {marker.City}
                meters = {marker.Sqmt}
            
                />
            
            })
        
        );

    }




export default Markers;