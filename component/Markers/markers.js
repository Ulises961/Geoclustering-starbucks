
import MyMarker from './Marker/marker';

const Markers = (props) => {

    return (
        props.markers.map((marker,index)=> { 
     
            return <MyMarker
                position= {[marker.Lat,marker.Lon]} 
                color={marker.Color}
                key = {index}
                addr = {marker.Address}
                city = {marker.City}
                meters = {marker.Sqmt}
                clicked= {props.toggleClustering}
                />
            
            })
        
        );

    }




export default Markers;