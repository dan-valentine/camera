import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Webcam from "react-webcam";

class App extends Component {
  render() {
    navigator.mediaDevices.enumerateDevices().then(devices => console.log(devices))
    const videoConstraints = {
      facingMode: { exact: "environment" }
    };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* <p className="App-intro">
          
        </p> */}
        {/* <Webcam videoConstraints={videoConstraints} /> */}
        
        {/* <Webcam /> */}
      </div>
    );
  }
}

export default App;
