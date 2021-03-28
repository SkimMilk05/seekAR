import React, { Component } from 'react';
import Form from './Form.js';
import Timer from './Timer.js';
import './Hide.css'

class Hide extends Component {

    constructor(props) {
        super(props);
        this.state = { //fields
            model_index: null,
            end: false,
            location: "0,0",
            zoom: 20
        };
        this.catchEndData = this.catchEndData.bind(this);
        this.catchModelData = this.catchModelData.bind(this);
    }

    catchModelData = (model) => {
        this.setState({model_index: model});
        this.props.passModelData(model);
    }

    catchEndData = () => {
        this.setState({end: true});
        if (this.state.model_index !== null) {
            this.props.passEnd(true);
        } else {
            if (!alert("You ran out of time! The seeker wins.")) { window.location.reload(); }
        }
    }

    render () {
        if (!this.state.end) {
            return (
                <div className="hider-out">
                    <div className="hider-in">
                        <Timer passEndData={this.catchEndData} time={this.props.time}/>
                        <Form passModelData={this.catchModelData}/>
                    </div>
                </div>
            )
        } 
        else {return null}
    }
    
}

export default Hide;