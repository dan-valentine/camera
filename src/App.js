import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Webcam from "react-webcam";

class App extends Component {
  constructor(){
    super();
    this.state = {
      front: false,
      back: false,
      chosen: false
    }
  }

  cameraFront = () => {
    this.setState({ front: true, chosen: true })
  }

  cameraBack = () => {
    this.setState({ back: true, chosen: true })
  }

  render() {
    let videoConstraints
    let back = this.state.back
    let front = this.state.front
    let chosen = this.state.chosen
    navigator.mediaDevices.enumerateDevices().then(devices => console.log(devices))
    
    if(front) {videoConstraints = {
      facingMode: { exact: "user" }
    }};
    if(back) {
      videoConstraints = {
      facingMode: { exact: "environment" }
    }};


    console.log('back: ' + this.state.back)
    console.log('front: ' + this.state.front)
    console.log('chosen: ' + this.state.chosen)
    console.log(videoConstraints)
    
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          We Testing Things
        </p>
        <div>
          <button onClick={this.cameraFront}> Front</button>
          <button onClick={this.cameraBack}> Back</button>
        </div>
        
        { chosen ? <Webcam videoConstraints={videoConstraints} />
        : null
        }
        
        <Webcam videoConstraints={videoConstraints} />
      </div>
    );
  }
}


export default App;
