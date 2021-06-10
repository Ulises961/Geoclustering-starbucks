import  {Component} from 'react';
import MyMarker from './Marker/marker';


class Markers extends Component{


    state={ 
        markers: []
     
      }
  
   
     

    render(){
      const KMeans = require('clusters');
      const dataForge = require('data-forge');
      const df= dataForge.fromCSV('./Data/directory.csv');
      const newMarkers = [...[df.serialize()]]

      this.setState({markers: newMarkers});

      const subset = df.subset(["sqm"]);

      const kmeans = KMeans.k(4);
      kmeans.data(subset);
      kmeans.clusters();
      

      points.forEach(function (cluster, index) {
        const color = colors[index];
        let coloredMarkers = [];
        this.state.markers.map( marker => {
        
          if (marker.sqm == cluster){
            const newMarker = marker;
            newMarker.color=color;
            coloredMarkers.push(marker);
          }
        })
        this.setState({markers:coloredMarkers});
       
    });

    

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