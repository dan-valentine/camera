import React, { Component } from 'react';

import Webcam from "react-webcam";
export default class UserCamera extends Component {
    render() {
        return (
            <Webcam
            videoConstraints={{
              facingMode: "user"
            }}
          />
        );
    }
}