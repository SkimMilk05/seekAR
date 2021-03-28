import './App.css';

import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { //fields
            players: [],
            seeker: 0,
            round_in_sesion: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleStart() {
      
    }

    handleFinish() {
        this.setState({round_in_sesion: false})
    }


    render() {
        return (null);
    }
}

export default App;