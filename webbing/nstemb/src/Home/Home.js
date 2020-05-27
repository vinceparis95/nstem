import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import Tone from 'tone'
import * as mm from "@magenta/music"
import history from './../history';
import "./Home.css";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.player = new mm.Player();
    this.state = {
      TWINKLE_TWINKLE: {
        notes: [
    {pitch: 60, startTime: 0.0, endTime: .5},
    {pitch: 60.92, startTime: .5, endTime: 1},
    {pitch: 65, startTime: 1.0, endTime: 1.5},
    {pitch: 67, startTime: 1.5, endTime: 2.0},
    {pitch: 60, startTime: 2.0, endTime: 3},

  ],
  totalTime: 3
       }
    };

    // alternatively, you could just do the following
    // if `TWINKLE_WINKLE` doesn't change/update
    // this.TWINKLE_WINKLE = { ... }
  }

  componentDidMount() {
    this.player.start(this.state.TWINKLE_TWINKLE);

    // or, if you set `TWINKLE_WINLKE` as a class property,
    // this.player.start(this.TWINKLE_WINKLE)
  }

  componentWillUnmount() {
    this.player.stop();
  }

  render() {
    return (
      <div className="Home">
        <div className="lander">
          <form>

          

          </form>
        </div>
      </div>
    );
  }
}
