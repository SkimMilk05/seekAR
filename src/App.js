import './App.css';
import UserSess from './components/UserSess.js';

import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { //fields
            players: [],
            seeker: 0,
            round_in_sesion: false,
            time: 0
        };
        this.handleStart = this.handleStart.bind(this);
    }
    handleStart() {
      this.setState({round_in_sesion: false});
    }

    handleFinish() {
        this.setState({round_in_sesion: false});
        this.setState({seeker: (this.state.seeker + 1) % this.state.players.length})
    }


    render() {
        return (<UserSess time={this.state.time}/>);
    }
}

export default App;