import  {Component} from 'react';
import MyMarker from './Marker/marker';


class Markers extends Component{


    state={ 
        markers: []
     
      }
  
    analise(){

      const KMeans = require('shaman').KMeans;
      const dataForge = require('data-forge');
      const df= dataForge.fromCSV('./Data/directory.csv');
      const newMarkers = [...df.serialize()]

      this.setState({markers: newMarkers});

      const subset = df.subset(["sqm"]);

      const kmeans = new KMeans(4);

      kmeans.cluster(subset.toRows(), function ( err, clusters, centroids){
          console.log(err);
          console.log(clusters);
          console.log(centroids);
          }     
      );

      clusters.forEach(function (cluster, index) {
        const color = colors[index];

        this.state.markers.map( marker => {
        
          if (marker.sqm == cluster){
            const newMarker = marker;
            newMarker.color=color;
          }
        })
       
    });

    }

    render(){
      this.analise();

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