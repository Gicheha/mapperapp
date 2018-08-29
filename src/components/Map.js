import React, { Component } from 'react'
import { withGoogleMap, GoogleMap, Marker} from 'react-google-maps'



class Map extends Component{
    render(){
        const mapContainer = <div style={{height:'100%',width:'100%'}}></div>
        const element = <div style={{height:'100%'}}></div>
        const markers = this.props.markers.map((venue, i) =>{
            const marker = {
                position: {
                    lat: venue.location.lat,
                    lng: venue.location.lng
                }
            }
            
            return <Marker key={i} {...marker} />
        })
        
        const Newmap = withGoogleMap(props =>(
            <GoogleMap
                defaultCenter = {this.props.center}
                defaultZoom = {13}
                options = {{streetViewControl: false, mapTypeControl: false}}>
                {markers}
            </GoogleMap>
            ))
        
        return(
            
                <Newmap containerElement={ mapContainer } mapElement ={element} />
            
        )
    }
}

export default Map