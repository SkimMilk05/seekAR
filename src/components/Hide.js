import React, { Component } from 'react';
import Form from './Form.js';
import Timer from './Timer.js';


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
        if (model == null) {
            alert("You ran out of time! The seeker wins.");
        } else {
            this.setState({model_index: model});
            this.passModelData(model);
        }
    }

    catchEndData = () => {
        this.setState({end: true});
        if (this.state.model_index != null) {
            this.passEnd(true);
        }
    }

    render () {
        if (!this.state.end) {
            return (
                <div>
                    <Timer passEndData={this.catchEndData} time={this.props.time}/>
                    <Form passModelData={this.catchModelData}/>
                </div>
            )
        } 
        else {return null}
    }
    
}

export default Hide;