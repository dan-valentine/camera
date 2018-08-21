import React, { Component } from 'react';

import Webcam from "react-webcam";

export default class EnviromentCamera extends Component {
    render() {
        return (
            <Webcam
            videoConstraints={{
              facingMode: { exact: "environment" }
            }}
          /> 
        );
    }
}