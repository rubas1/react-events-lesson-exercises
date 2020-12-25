import React, { Component } from 'react';

export const Home = function () {
  return (<div className="home">Welcome to our page</div>)
}

export const About = function () {
  return (<div className="about">It's great here</div>)
}

export class SpotCheck2 extends Component {
  constructor(){
    super()
    this.state = {
      showHome: true
    }
  }
  whatToShow = () => {
    this.setState({
      showHome: !this.state.showHome
    })

  }
  render() {
    return (
      <div >
        <button onClick={this.whatToShow}>Toggle</button>
        {this.state.showHome ? <Home /> : <About />}
      </div>
    );
  }
}


