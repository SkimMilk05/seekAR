import React, { Component } from 'react';
import './Form.css';import Countdown from 'react-countdown';

class Timer extends Component {

    constructor(props) {
        super(props);
        this.state = { //fields
            end: false
        };
        this.submit = this.submit.bind(this);
    }

    submit() {
        this.setState({end: true});
        this.props.passEndData(true);
    }


    render () {
        return (
            <>
                <h2>Quick! You have <Countdown date={Date.now() + this.props.time} onComplete={this.submit} autoStart={true}/> seconds to hide!</h2>
                <button onClick={this.submit} className="btn">Done Hiding</button>
            </>
        )
    }
    
}

export default Timer;