import React, { Component } from 'react';
import Form from './Form.js';
import Timer from './Timer.js';


class Hide extends Component {

    catchModelData = (model) => {
        this.props.catchModelData(this.state.ModelData);
      }

    render () {
        return (
            <div>
                <Timer time={this.props.time}/>
                <Form passModelData={this.catchModelData}/>
            </div>
            
        );
    }
    
}

export default Hide;