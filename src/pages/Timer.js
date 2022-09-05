import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

class Timer extends React.Component {
    // const loadTimer = (this.state.curDT) => {
    //         return 1;
    // }

    constructor(props) {
        super(props);
        this.state = {
            curDT: new Date().toLocaleString('en-US', { hour: '2-digit',minute: '2-digit',second: '2-digit', hour12: true })
        };
      }
      
      loadTimer() {
        this.setState(state => ({
          curDT: new Date().toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })
        }));
      }

      componentDidMount() {
        console.log('persec')
        this.interval = setInterval(() => this.loadTimer(), 1000);
      }
      
    render(){
      return (
            <div>
                <h1>Current Time </h1>  <p> {this.state.curDT}</p> 
            </div>
      );     
    }
  }
  export default Timer;