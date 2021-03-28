import './App.css';
import UserSess from './components/UserSess.js';
import React, { Component } from 'react';
import Form from './components/Form.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { //fields
            players: false,
            seeker: true,
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
        return (
            <div>
                <UserSess time={this.state.time} />
            </div>
        );
    }
}

export default App;