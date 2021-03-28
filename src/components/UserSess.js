import Form from './Form.js';
import Link from './Link.js';
import StartGame from './StartGame.js';
import React, { Component } from 'react';

class UserSess extends Component {
    constructor(props) {
        super(props);
        this.state = { //fields
            seeker: null,
            model: '',
            time: 0
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        this.setState({item_found: true})
    }

    catchModelData = (model) => {
      this.setState({model: model});
    }


    render() {
        return (
          <div className="App">
            <header className="App-header">
              <Form time={this.state.time} passModelData={this.catchModelData} />
              <Link model={this.state.model}/>
              <StartGame />
            </header>
          </div>
        );
    }
}

export default UserSess;