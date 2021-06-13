import { LayersControl } from "react-leaflet";

function TooltipCircle(props) {

  return (
    <LayersControl
       center={[48.00, 16.38]}
      onClick={props.clicked}
      pathOptions={{ fillColor: 'blue' }}
      radius={500}>
    
    </LayersControl>
  )
}
export default TooltipCircle;