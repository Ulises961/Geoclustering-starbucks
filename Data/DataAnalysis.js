import { min as _min, max as _max, sum as _sum, median as _median, mode as _mode, mean as _mean, variance as _variance, standardDeviation, quantile as _quantile } from 'simple-statistics';

import { fromCSV } from 'data-forge';

const kmeans = require('clusters');
const df= fromCSV('./Data/sirectory.csv');
const subset = df.subset(["sqm"]);

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

console.log('sqm');
console.log(summary(subset.getSeries('sqm').toArray()));

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
