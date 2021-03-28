import React, { Component } from 'react';
import './Form.css';import Countdown from 'react-countdown';

class Timer extends Component {

    submit() {
        this.setState({end: true});
        this.props.passModelData(this.state.model_index);
    }


    render () {
        return (
            <div className="directions">
                <h2>Quick! You have <Countdown date={Date.now() + this.props.time} onComplete={this.submit} autoStart={true}/> seconds to hide!</h2>
            </div>
        )
    }
    
}

export default Timer;