import React, { Component } from 'react';
// import { Text, Button, StyleSheet, View, TextInput, Alert } from 'react-native';
import './Form.css';
// import ApiKeys from "./ApiKeys.js";
// import select from 'react-select';
// import Select from '@material-ui/core/Select';
import Countdown from 'react-countdown';

// import { makeStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
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
            <div>
                <h2 className="directions">Quick! You have <Countdown date={Date.now() + this.state.time} onComplete={this.submit}/> seconds to hide!</h2>
                <h2 className="directions">Choose your avatar:</h2>
                <div className="dropdown">
                    <Select options={modelOptions} onChange={this.handleModelPick}/>
                    <button onClick={this.submit} className="dropbtn">Done Hiding</button>
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