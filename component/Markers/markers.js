import  {Component} from 'react';
import MyMarker from './Marker/marker';
import coloredMarkers from './../../Data/DataAnalysis';

class Markers extends Component{


    state={ 
        markers: coloredMarkers
     
      }
  
   
     

    render(){


        const points = this.state.markers;
      
        return (points.map((marker)=> { 

            console.log(marker);
            
            return <MyMarker
                position= {[marker.lat,marker.long]} 
                color={marker.color}
                key = {marker.key}
                info = {marker.number}               
                />
            
            })
        
        );

    }


}

export default Markers