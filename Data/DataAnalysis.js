const stats = require('simple-statistics');
const KMeans = require('shaman').KMeans;
const dataForge = require('data-forge');


const df= dataForge.fromCSV('./Data/sirectory.csv');
const subset = df.subset(["sqm"]);

function summary(column){
    return {
        min: stats.min(column),
        max: stats.max(column),
        sum: stats.sum(column),
        median: stats.median(column),
        mode: stats.mode(column),
        mean: stats.mean(column),
        variance: stats.variance(column),
        stdDev: stats.standardDeviation(column),
        quantile: {
            q1: stats.quantile(column,0.25),
            q3: stats.quantile(column,0.75)
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

clusters.forEach(function (cluster, index) {
    const color = colors[index];
    const trace = {
        newCluster = {...cluster, color}
        
    }
});