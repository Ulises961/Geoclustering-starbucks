import  {Component} from 'react';
import MyMarker from './Marker/marker';
import coloredMarkers from './../../Data/points.json';
import showFunc from './../../Data/DataAnalysis';
class Markers extends Component{

   
    
    state={ 
        markers: [{"Lon": "-84.16", "Lat": "9.94", "Sqmt": "92", "City": "Guachipelin", "Address": "300 m al norte del polideportivo, de Guachipelin, Local 102 AJ", "Color": "red"}, {"Lon": "-84.06", "Lat": "9.96", "Sqmt": "61", "City": "Moravia", "Address": "Mall Lincoln Plaza San Vicente, Local # 232", "Color": "red"}, {"Lon": "4.35", "Lat": "50.83", "Sqmt": "54", "City": "Brussels", "Address": "Guldenvlieslaan", "Color": "red"}, {"Lon": "4.33", "Lat": "50.83", "Sqmt": "149", "City": "Brussels", "Address": "Frankrijkstraat & Fonsnylaan", "Color": "red"}, {"Lon": "4.41", "Lat": "50.84", "Sqmt": "85", "City": "Brussels", "Address": "Montgomery, Woluwe-Saint-Pierre", "Color": "red"}, {"Lon": "4.4", "Lat": "51.22", "Sqmt": "186", "City": "Antwerp", "Address": "Groenplaats 13", "Color": "red"}, {"Lon": "4.36", "Lat": "50.84", "Sqmt": "161", "City": "Brussels", "Address": "Grand Place de Bruxelles 4, Couloir City 2", "Color": "red"}, {"Lon": "4.36", "Lat": "50.85", "Sqmt": "100", "City": "Brussels", "Address": "Boulevard du Jardin Botanique, Antwerp Centraal Railway Station", "Color": "red"}, {"Lon": "4.42", "Lat": "51.22", "Sqmt": "167", "City": "Antwerp", "Address": "Koningin Astridplein 27", "Color": "red"}, {"Lon": "3.19", "Lat": "51.27", "Sqmt": "171", "City": "Brugges", "Address": "Stationsplein 5, Brussels Centraal", "Color": "red"}, {"Lon": "4.36", "Lat": "50.85", "Sqmt": "177", "City": "Brussels", "Address": "Eurpoakruispunt", "Color": "red"}, {"Lon": "3.72", "Lat": "51.04", "Sqmt": "74", "City": "Gent", "Address": "Koningin Maria Hendrikaplein 1", "Color": "red"}, {"Lon": "3.72", "Lat": "51.05", "Sqmt": "192", "City": "Gent", "Address": "Korenmarkt 4", "Color": "red"}, {"Lon": "4.71", "Lat": "50.88", "Sqmt": "66", "City": "Leuven", "Address": "Martelarenplein 16", "Color": "red"}, {"Lon": "4.36", "Lat": "50.86", "Sqmt": "100", "City": "Schaerbeek", "Address": "Vooruitgangstraat 76, Brussels Airport - BRU", "Color": "red"}, {"Lon": "4.49", "Lat": "50.9", "Sqmt": "145", "City": "Zaventem", "Address": "Departure Hall, Brussels Airport - BRU", "Color": "red"}, {"Lon": "4.48", "Lat": "50.87", "Sqmt": "103", "City": "Zaventem", "Address": "Concourse A, Brussels Airport - BRU", "Color": "red"}, {"Lon": "4.48", "Lat": "50.9", "Sqmt": "64", "City": "Zaventem", "Address": "Concourse B", "Color": "red"}, {"Lon": "5.57", "Lat": "50.63", "Sqmt": "193", "City": "Liege", "Address": "2 Place de Guillemins", "Color": "red"}, {"Lon": "4.86", "Lat": "50.47", "Sqmt": "185", "City": "Namur", "Address": "Place de la Station", "Color": "red"}, {"Lon": "25.62", "Lat": "42.42", "Sqmt": "81", "City": "Burgas", "Address": "Stefan Stambolov Blvd & Transportna Str", "Color": "red"}, {"Lon": "23.43", "Lat": "42.64", "Sqmt": "84", "City": "Sofia", "Address": "Tsarigradsko Blvd", "Color": "red"}, {"Lon": "23.32", "Lat": "42.66", "Sqmt": "67", "City": "Sofia", "Address": "100 Cherni Vrah Blvd", "Color": "red"}, {"Lon": "23.32", "Lat": "42.7", "Sqmt": "76", "City": "Sofia", "Address": "Vas Lefski Bulvd and Gurko street", "Color": "red"}, {"Lon": "23.32", "Lat": "42.69", "Sqmt": "67", "City": "Sofia", "Address": "V Lefski Blvd & Frityof Nansen", "Color": "red"}, {"Lon": "50.52", "Lat": "26.21", "Sqmt": "150", "City": "Bahrain", "Address": "The Courtyard , Seef District", "Color": "red"}, {"Lon": "50.59", "Lat": "26.23", "Sqmt": "109", "City": "Manama", "Address": "Saar Mall", "Color": "red"}],
        calculateMeans : false
      }

    clickHandler = () =>{
        const calculate = this.state.calculateMeans;
        this.setState({calculateMeans: !calculate});
          console.log(this.state.calculateMeans);
    }
    
    toggleClustering = ()=> {
        const res = showFunc(coloredMarkers);
        this.setState({markers: res})
    }

    render(){

       
            console.log(this.state.calculateMeans);
            console.log(this.state.markers);
           
       
            const points = this.state.markers;
          

        return (points.map((marker,index)=> { 
        
       
            return <MyMarker
                position= {[marker.Lat,marker.Lon]} 
                color={marker.Color}
                key = {index}
                addr = {marker.Address}
                city = {marker.City}
                smqt = {marker.Sqmt}
                clicked= {this.toggleClustering}
                />
            
            })
        
        );

    }


}

export default Markers