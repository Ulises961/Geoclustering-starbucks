import  {Component} from 'react';
import MyMarker from './Marker/marker';


class Markers extends Component{


    state={ 
        markers: [
          {
            lat:33770013,
            long:-118192643,
            color: 'blue',
            key: 1,
            info:"This is a blue point",
          },
          {
            lat:51.515, 
            long:-0.09,
            color:'red',
            key: 2,
            info:"This is a red point",
          },
          {
            lat: 51.510,
            long: -0.09,
            color:'green',
            key: 3,
            info:"This is a green point",
          },
        ]
     
      }
      

    render(){

        const points = this.state.markers;
      
        return (points.map((marker)=> { 

            console.log(marker);
            
           
            return <MyMarker
                position= {[marker.lat,marker.long]} 
                color={marker.color}
                key = {marker.key}
                info = {marker.info}               
                />
            
            })
        
        );

    }


}

export default Markers