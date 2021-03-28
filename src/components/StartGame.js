import React, { Component } from 'react';
import Select from 'react-select';
import './StartGame.css'
// seeker

const numbers = [
    {label: '10 sec', value: 10000},
    {label: '20 sec', value: 20000},
    {label: '30 sec', value: 30000},
    {label: '45 sec', value: 45000},
    {label: '60 sec', value: 60000}
];

class StartGame extends Component {
    constructor(props) {
        super(props);
        this.state = { //fields
            time: 0,
            submitted: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTimePick = this.handleTimePick.bind(this);
    }

    handleSubmit() {
        this.setState({submitted: true})
        this.props.passTime(this.state.time);
    }

    handleTimePick(event) {
        this.setState({time: event.value})
    }


    render() {
        return (                
            <div className="start-page">
                <div className="inner-box">
                    <h3>[Seeker]</h3>
                    <h1>Close your eyes</h1>
                    <h3>What are you counting to?</h3>
                    <Select className="dropdown" options={numbers} onChange={this.handleTimePick} />
                    <button className="btn" onClick={this.handleSubmit}>Starting Countdown!</button>
                </div>
            </div>
        );
    }
}

export default StartGame;