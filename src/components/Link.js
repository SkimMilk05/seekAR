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
        if (!alert("You found the item! Play Again!")) { window.location.reload(); }
    }
    

    linkClicked() {
        this.setState({link_clicked: true});
    }

    render() {
        const model = this.props.model;
        const link = modelLinks[model];
        return (                
            <div className="link-page">
                <div className="link-inner">
                    <h3>[Seeker]</h3>
                    <h3>Ready or not...</h3>
                    <a className="model-link" href={link} target="_blank" rel="noopener noreferrer" onClick={this.linkClicked}>
                        Here I come!</a> <br></br>
                    <button className="btn" type="submit"
                        title="I found you!"
                        disabled={!this.state.link_clicked}
                        onClick={this.handleSubmit}
                    >I found you!</button>    
                </div>
            </div>
        );
    }
}

export default Link;