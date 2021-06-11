import { min as _min, max as _max, sum as _sum, median as _median, mode as _mode, mean as _mean, variance as _variance, standardDeviation, quantile as _quantile } from 'simple-statistics';

import {  fromJSON } from 'data-forge';


const KMeans = require('shaman').KMeans;
const df= fromJSON('./Data/points.json');
const subset = df.subset(["Longitude","Latitude"]).select(function (row){ 
    return {
        Lat : parseFloat(row.Latitude),
        Lon : parseFloat(row.Longitude)
    };
});

function summary(column){
    return {
        min: _min(column),
        max: _max(column),
        sum: _sum(column),
        median: _median(column),
        mode: _mode(column),
        mean: _mean(column),
        variance: _variance(column),
        stdDev: standardDeviation(column),
        quantile: {
            q1: _quantile(column,0.25),
            q3: _quantile(column,0.75)
        }
    }
}

console.log(subset);
console.log(summary(subset.getSeries('Longitude').toArray()));
console.log(summary(subset.getSeries('Latitude').toArray()));

const kmeans = new KMeans(4);

kmeans.cluster(subset.toRows(), function ( err, clusters, centroids){
    console.log(err);
    console.log(clusters);
    console.log(centroids);
});

const colors= ['red','blue','yellow','green'];
let coloredMarkers = [];

clusters.forEach(function (cluster, index) {
    const color = colors[index];
    const newCluster = {...cluster, color}
    coloredMarkers.push(newCluster);
    
});

export default coloredMarkers;
