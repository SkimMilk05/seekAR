import React, { Component } from 'react';
import './Link.css'
import {modelLinks} from './modelLink.js';
import {modelQRs} from './modelLink.js';
import pika from './assets/pika.PNG';


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
        return (                
            <div className="link-page">
                Ready or not...
                <a href={modelLinks[model]} target="_blank" rel="noopener noreferrer" onClick={this.linkClicked}>
                    Here I come!</a>
                <button type="submit"
                    title="I found you!"
                    disabled={!this.state.link_clicked}
                    onClick={this.handleSubmit}
                />
                <img scr={pika}/>
                
            </div>
        );
    }
}

export default Link;