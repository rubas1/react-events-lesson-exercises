import React, { Component } from 'react';

class SpotCheck1 extends Component {
    onHover() {
        console.log("I was hovered!")
    }
    logClick() {
        console.log("I was clicked!")
    }
    render() {
        return (
            <button id="logger" onClick={this.logClick} onMouseEnter={this.onHover}>Click me</button>
        );
    }
}

export default SpotCheck1;
