import React, { Component } from 'react';

class StartGame extends Component {
    constructor(props) {
        super(props);
        this.state = { //fields
            submitted: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        this.setState({submitted: true})
    }


    render() {
        return (                
            <div className="start-page">
                <h3>Close your eyes</h3>
                <h5>To what are you counting to?</h5>
                
                <button type="submit"
                    title="Ready to count!"
                    onClick={this.handleSubmit}
                />
            </div>
        );
    }
}

export default StartGame;