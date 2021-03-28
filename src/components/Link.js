import React, { Component } from 'react';
import './Link.css'
import {modelLinks} from './modelLink.js';

class Link extends Component {
    constructor(props) {
        super(props);
        this.state = { //fields
            link_clicked: false,
            item_found: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.linkClicked = this.linkClicked.bind(this);
    }

    handleSubmit() {
        this.setState({item_found: true})
        alert('You found them!')
    }
    

    linkClicked() {
        this.setState({link_clicked: true});
    }

    render() {
        const model = this.props.model;
        const link = modelLinks[model];
        return (                
            <div className="link-page">
                <h4>[Seeker]</h4>
                <p>Ready or not...</p>
                <a classname="link-here" href={link} target="_blank" rel="noopener noreferrer" onClick={this.linkClicked}>
                    Here I come!</a> <br></br>
                <button className="btn" type="submit"
                    title="I found you!"
                    disabled={!this.state.link_clicked}
                    onClick={this.handleSubmit}
                >I found you!</button>                
            </div>
        );
    }
}

export default Link;