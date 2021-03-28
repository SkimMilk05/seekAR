import React, { Component } from 'react';
import './Form.css';import Countdown from 'react-countdown';
import {modelOptions} from './modelLink.js';
import Select from 'react-select';

var location;


  


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
    }

    handleModelPick(event) {
        this.setState({model_index: event.value});
    }

    submit() {
        this.setState({end: true});
        this.props.passModelData(this.state.model_index);
        alert('Time out')
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition( position => {
                console.log(position.coords.latitude);
                const loc = `${position.coords.latitude},${position.coords.longitude}`;
                console.log(loc);
                this.setState({
                    location: loc
                });
            });
        } else { 
          alert("Geolocation is not supported by this browser.");
        }
    }

    componentDidMount() {
        this.getLocation();
    }



    render () {
        return (
            <div className="directions">
                <h2>Quick! You have <Countdown date={Date.now() + this.state.time} onComplete={this.submit}/> seconds to hide!</h2>
                <h3>Choose your avatar:</h3>
                <div className="dropdown">
                    <Select options={modelOptions} onChange={this.handleModelPick}/>
                    <button onClick={this.submit} className="btn">Done Hiding</button>
                </div>
                {/*<div>
                    <button onClick={this.handleResetLocation}>Reset Location</button>
                    <label>Latitute:</label><input type='text' value={this.state.location.lat} disabled/>
                    <label>Longitute:</label><input type='text' value={this.state.location.lng} disabled/>
                    <label>Zoom:</label><input type='text' value={this.state.zoom} disabled/>
                    <MapPicker defaultLocation={this.state.location}
                        apiKey='AIzaSyBW5nsWZ5VwjfS4ajbGsV-HmLuXPd8K6_U'/>
                </div>*/}
                <iframe
                    width="600"
                    height="450"
                    loading="lazy"
                    src={`https://www.google.com/maps/embed/v1/streetview?key=AIzaSyBW5nsWZ5VwjfS4ajbGsV-HmLuXPd8K6_U&location=${this.state.location}`}>
                </iframe>
                
            </div>
        )
    }
    
}

export default Form;