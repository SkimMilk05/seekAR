import React, { Component } from 'react';
import Select from 'react-select';

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
    }

    handleTimePick(event) {
        this.setState({time: event.value})
    }


    render() {
        return (                
            <div className="start-page">
                <h3>Close your eyes</h3>
                <h5>To what are you counting to?</h5>
                <Select options={numbers} onChange={this.handleTimePick}/>
                <button onClick={this.handleSubmit}>Starting Countdown!</button>
            </div>
        );
    }
}

export default StartGame;