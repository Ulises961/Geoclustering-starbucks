import {  fromJSON, fromObject,  } from 'data-forge';

function show(Data){

    const KMeans = require('kmeans-js');

    let km = new KMeans({ K: 2});
    let element = Data;
    console.log("Data: ",Data);
  
    const surfaceList = [];
    Data.forEach(object => {
        surfaceList.push(object.Sqmt);
    });
 
    km.cluster(surfaceList);
    while (km.step()){
        km.findClosestCentroids();
        km.moveCentroids();
    
        if(km.hasConverged())
            break;
    }

     console.log('Finished in:', km.currentIteration, ' iterations');
     console.log(km.centroids, km.clusters);
    const colors= ['green','orange','blue','red'];
    const coloredMarkers = [];
    const referenceMarkers= [];

    km.clusters.forEach(function(cluster, c_index){
        const color = colors[c_index];
        const referenceMarker = {...km.centroids[c_index], Color:color}
        referenceMarkers.push(referenceMarker);
        
        cluster.forEach(function(point){
            
            const newCluster = {...element[point],Color: color}
            coloredMarkers.push(newCluster);

        })
        
    });
    console.log("Reference markers ",referenceMarkers);
    return {markers: coloredMarkers, centroids: referenceMarkers};
}

//console.log(coloredMarkers);

export default show;
