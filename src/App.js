import './App.css';
import Form from './components/Form.js';
import Link from './components/Link.js';

import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { //fields
            players: [],
            finder: 0
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        this.setState({item_found: true})
    }


    render() {
        return (
          <div className="App">
            <header className="App-header">
              <Form></Form>
              <Link></Link>
            </header>
          </div>
        );
    }
}

export default App;