export default function show(Data) {
  const KMeans = require("kmeans-js");

  let km = new KMeans({ K: 4 });
  let element = Data;

  const surfaceList = [];
  Data.forEach((object) => {
    surfaceList.push(object.Sqmt);
  });

  km.cluster(surfaceList);
  while (km.step()) {
    km.findClosestCentroids();
    km.moveCentroids();

    if (km.hasConverged()) break;
  }

  const colors = ["Green", "Orange", "Blue", "Red"];
  const coloredMarkers = [];
  const referenceMarkers = [];

  km.clusters.forEach(function (cluster, c_index) {
    const color = colors[c_index];
    const referenceMarker = { ...km.centroids[c_index], Color: color };
    referenceMarkers.push(referenceMarker);

    cluster.forEach(function (point) {
      const newCluster = { ...element[point], Color: color };
      coloredMarkers.push(newCluster);
    });
  });

  return { markers: coloredMarkers, centroids: referenceMarkers };
}
