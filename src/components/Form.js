import React, { Component } from 'react';
import './Form.css';import Countdown from 'react-countdown';
import {modelOptions} from './modelLink.js';
import Select from 'react-select';
import MapPicker from 'react-google-map-picker';
// hider

var location;

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      alert("Geolocation is not supported by this browser.");
    }
  }
  
function showPosition(position) {
    location = {lat: position.coords.latitude, lng: position.coords.longitude};
    alert('set location');
}

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = { //fields
            model_index: null,
            time: this.props.time,
            end: false,
            location: {lat:0, lng: 0},
            zoom: 20
        };
        this.handleModelPick = this.handleModelPick.bind(this);
        this.submit = this.submit.bind(this);
        this.handleChangeLocation = this.handleChangeLocation.bind(this);
        this.handleChangeZoom = this.handleChangeZoom.bind(this);
        this.handleResetLocation = this.handleResetLocation.bind(this);
    }

    handleModelPick(event) {
        this.setState({model_index: event.value});
    }

    submit() {
        this.setState({end: true});
        this.props.passModelData(this.state.model_index);
        alert('Time out')
    }

    componentDidMount() {
        getLocation();
    }

    handleChangeLocation (lat, lng){
        this.setState({location: {lat:lat, lng:lng}});
    }

    handleChangeZoom (newZoom){
        this.setState({zoom: newZoom});
    }

    handleResetLocation(){
        this.setState({location: {lat:0, lng:0}});
        this.setState({zoom: 20});
    }



    render () {

        return (
            <div>
                <h2 className="directions">Quick! You have <Countdown date={Date.now() + this.state.time} onComplete={this.submit}/> seconds to hide!</h2>
                <h2 className="directions">Choose your avatar:</h2>
                <div className="dropdown">
                    <Select options={modelOptions} onChange={this.handleModelPick}/>
                    <button onClick={this.submit} className="dropbtn">Done Hiding</button>
                </div>
                <div>
                    <button onClick={this.handleResetLocation}>Reset Location</button>
                    <label>Latitute:</label><input type='text' value={this.state.location.lat} disabled/>
                    <label>Longitute:</label><input type='text' value={this.state.location.lng} disabled/>
                    <label>Zoom:</label><input type='text' value={this.state.zoom} disabled/>
                    <MapPicker defaultLocation={this.state.location}
                        apiKey='AIzaSyBW5nsWZ5VwjfS4ajbGsV-HmLuXPd8K6_U'/>
                </div>
                
            </div>
        )
    }
    
}

export default Form;