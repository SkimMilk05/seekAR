import './App.css';
import React, { Component } from 'react';
import Link from './components/Link.js';
import Hide from './components/Hide.js';
import StartGame from './components/StartGame.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { //fields
            start_game: true,
            hide: false,
            link: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        this.setState({item_found: true})
    }

    catchModelData = (model) => {
      this.setState({model: model});
    }

    catchTime = (time) => { //get time from startGame. pass to Hide Component
      this.setState({time: time});
    }


    render() {

        const {link, hide, start_game} = this.state;

        if (link) {
            return <div className="App"><Link model={this.state.model}/></div>
        } 
        else if (hide) {
            return <div className="App"><Hide time={this.state.time} passModelData={this.catchModelData} /></div>
        }
        else {
            return <div className="App"><StartGame passTime={this.catchTime}/></div> 
        }
    }
}

export default App;