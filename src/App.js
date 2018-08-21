import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import UserCamera from './userCamera';
import EnviromentCamera from './EnviromentCamera';

class App extends Component {
  constructor() {
    super();
    this.state = {
      front: true,
      isFront: false,
      isBack: false,
      stream: null
    };
  }

  componentDidMount() {
    let isFront = false;
    let isBack = false;
    let currentStream = null;

    const constraints = {
      video: {
        facingMode: "user"
      },
      audio: false
    }
    navigator.mediaDevices.getUserMedia(constraints)
      .then(stream => {
        alert(stream.getTracks().length)
        if (stream.getTracks().length) {
          isFront = true;
          currentStream = stream;
        }

        // check the back camera NOT WORKING
        const constraints = {
          video: {
            facingMode: { exact: "enviroment" }
          },
          audio: false
        }
        navigator.mediaDevices.getUserMedia(constraints)
          .then(stream => {
            alert(stream.getTracks().length)
            if (stream.getTracks().length) {
              isBack = true;
              if(!isFront){
                currentStream = stream;
              }
            }

            this.setState({
              stream: currentStream,
              isFront,
              isBack
            })
          })
      });
  }

  cameraFront = () => {
    this.setState({ front: true });
  };

  cameraBack = () => {
    this.setState({ front: false });
  };

  render() {
    const {isBack, isFront} = this.state
    let videoConstraints;
    let back = this.state.back;
    let front = this.state.front;
    let chosen = this.state.chosen;
    navigator.mediaDevices
      .enumerateDevices()
      .then(devices => console.log(devices));


    console.log("back: " + this.state.back);
    console.log("front: " + this.state.front);
    console.log("chosen: " + this.state.chosen);
    console.log(videoConstraints);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">We a Testing Things</p>
        {/* IF BOTH FRONT AND BACK AVAILABLE SHOW BUTTON */}
        {true && <div>
          <button onClick={this.cameraFront}> Front</button>
          <button onClick={this.cameraBack}> Back</button>
        </div>}
        {front ?
          <UserCamera />
          :
          <EnviromentCamera />
        }

        {/* { this.state.chosen ? <Webcam videoConstraints={videoConstraints} />
        : null
        }
        <br />
        <br />
        <br />
        <br /> */}
        {/* <Webcam videoConstraints={videoConstraints} />/ */}
      </div>
    );
  }
}

export default App;
