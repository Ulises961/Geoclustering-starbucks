import  {Component} from 'react';
import MyMarker from './Marker/marker';
import coloredMarkers from './../../Data/points.json';

class Markers extends Component{


    state={ 
        markers: coloredMarkers
     
      }
  

    render(){


        const points = this.state.markers;
      
        return (points.map((marker)=> { 

            console.log(marker);
       
            return <MyMarker
                position= {[marker.Lat,marker.Lon]} 
                color={marker.Color}
                key = {marker.key}
                addr = {marker.Address}
                city = {marker.city}
                smq = {marker.Smqt}
                />
            
            })
        
        );

    }


}

export default Markers