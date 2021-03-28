import React, { Component } from 'react';
import './Form.css';
import {modelOptions} from './modelLink.js';
import Select from 'react-select';


class Form extends Component {

    constructor(props) {
        super(props);
        this.state = { //fields
            location: "0,0",
            zoom: 20
        };
        this.handleModelPick = this.handleModelPick.bind(this);
    }

    handleModelPick(event) {
        this.props.passModelData(event.value);
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
            <>
                <h3>Choose your avatar:</h3>
                <div className="dropdown">
                    <Select options={modelOptions} onChange={this.handleModelPick}/>
                </div>
                <button className="btn">Select Location</button> <br></br>
                <iframe title="where-to-hide"
                    className="map"
                    width="600"
                    height="450"
                    loading="lazy"
                    src={`https://www.google.com/maps/embed/v1/streetview?key=AIzaSyBW5nsWZ5VwjfS4ajbGsV-HmLuXPd8K6_U&location=${this.state.location}`}>
                </iframe>
            </>
        )
    }
    
}

export default Form;