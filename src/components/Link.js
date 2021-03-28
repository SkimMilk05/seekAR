import React, { Component } from 'react';

class Link extends Component {
    constructor(props) {
        super(props);
        this.state = { //fields
            link_clicked: false,
            item_found: false,
            link: "https://go.echoar.xyz/cESt"
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
        return (                
            <div className="link-page">
                <a href={this.state.link} target="_blank" onClick={this.linkClicked}>Ready or not, here I come!</a>
                <button type="submit"
                    title="I found you!"
                    disabled={!this.state.link_clicked}
                    onClick={this.handleSubmit}
                />
            </div>
        );
    }
}

export default Link;