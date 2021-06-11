import {  fromJSON,  } from 'data-forge';
// import Data from "./points.json"

function show(Data){
    alert("entered")
    const KMeans = require('kmeans-js');

    let km = new KMeans({ K: 2});
    let element = Data;

    const df = fromJSON(JSON.stringify(Data));

    const subset = df.subset(["Sqmt"]).select(function (row){ 
        return {
            mts : parseFloat(row.Sqmt),
        
        };
    });


    km.cluster(subset.toRows());

    while (km.step()){
        km.findClosestCentroids();
        km.moveCentroids();
    
        if(km.hasConverged())
            break;
    }

    console.log('Finished in:', km.currentIteration, ' iterations');
    console.log(km.centroids, km.clusters);
    const colors= ['green','yellow','blue','green'];
    let coloredMarkers = [];


    km.clusters.forEach(function(cluster, c_index){
        const color = colors[c_index];
        cluster.forEach(function(point){
            
            const newCluster = {...element[point],color: color}
            console.log(element[point],point, color);
            coloredMarkers.push(newCluster);
        })
        
    });
    return coloredMarkers;
}

//console.log(coloredMarkers);

export default show;
