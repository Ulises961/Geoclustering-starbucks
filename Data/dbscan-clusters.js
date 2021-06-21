//import Data from './points.json'
import dbscanner from 'dbscanjs'

export default function dbscancluster (Data){


    const surfaceList = [];
    Data.forEach(object => {
        surfaceList.push(object.Sqmt);
    });

    function distance(a,b){
     
        return Math.abs(b-a);
    }
    
    const minPts = (Data.length / 4); // evenly distribution of values in 4 clusters
    const epsilon = Math.ceil(150 / 4); // since surface measures are randomly applied we can assume a uniform distribution
    
    
    /** dbscanner returns an array of labels where each label corresponds to the element 
     * at the same position in the original array, and each label indicates to which cluster it belongs */
    
    const labels = dbscanner(surfaceList,distance,epsilon,minPts);
   
    const colors= ['Green','Orange','Blue','Red'];
    const coloredMarkers = [];
    


    let max = labels[0];
  /**  we iterate over each label and as they indicate the cluster assgined we 
   * give it a color from the array of colors, the index of each label corresponds to each element
   * of the original array, so we assign to that element the color indicated by the label
   */
    labels.forEach((label,index) => { 

        const color = colors[label];
        const coloredMarker =  {...Data[index]}
        coloredMarker.Color = color;
        coloredMarkers.push(coloredMarker);
        
        if(max < label)
            max = label;

    });

   // console.log(labels);
    return {markers: coloredMarkers, labels: labels };
}