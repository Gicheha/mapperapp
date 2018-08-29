import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Map from './components/Map'
import Places from './components/Places'
import superagent from 'superagent'

class App extends Component{
    constructor(){
        super()
        this.state = {
            venues:[]
        }
    }
 
    componentDidMount(){
        console.log('componentDidMount')
        
        const url = 'https://api.foursquare.com/v2/venues/search?v=20188030&ll=-1.2921,36.8219&client_id= STFEAAST1HTNVFMD54F2LPPLV0SKM1KJJ0I5PYEB20QECR4O&client_secret=N5F4ZPGZDX3QDUM2TQHTK1PM4SBNP2TWW2UZFHE2RNW1TOSQ'
        
         superagent
        .get(url)
        .query(null)
        .set('Accept', 'text/json')
        .end((error, response) => {
            
            const json = response.body.response
            const venues = json.venues
            console.log(JSON.stringify(response.body))
            this.setState({
                venues: venues
            })
        })
    }
    
	render(){
        //Prop to be passed to the Map Component
        const location = {
            lat: -1.2921,
            lng: 36.8219
        }
       
        
		return(
			<div>
                <div className="col1" style = {{width:400, height:750 }}>
                    <Map center = {location} markers = {this.state.venues} />
                </div>
            
                <Places venues = {this.state.venues}/>
			</div>
        )
	} 
}

ReactDOM.render(<App />, document.getElementById('app'))