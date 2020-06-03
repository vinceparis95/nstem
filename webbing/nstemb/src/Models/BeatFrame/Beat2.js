import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './Beat.css'
import Tone from 'tone'
import * as mm from "@magenta/music"

class Beat2 extends React.Component {
  constructor(props) {
    super(props);

    this.music_vae = new mm.MusicVAE('https://storage.googleapis.com/magentadata/js/checkpoints/music_vae/mel_4bar_small_q2');
    this.music_vae.initialize();
    this.vaePlayer = 9
    this.vae_temperature = 19
    this.player = new mm.Player();
    this.state = {
      TWINKLE_TWINKLE: {
        notes: [
    {pitch: 46, quantizedStartStep: 0, quantizedEndStep: 3},
    {pitch: 65.19, quantizedStartStep: 1, quantizedEndStep: 3},
    {pitch: 69, quantizedStartStep: 2, quantizedEndStep: 4},
    {pitch: 65.9, quantizedStartStep: 4, quantizedEndStep: 6},

  ],
  quantizationInfo: {stepsPerQuarter:5},
  tempos: [{time: 0, qpm: 180}],
  totalQuantizedSteps: 5
       }
    }

    function playVAE() {
      if (this.player.isPlaying()) {
        this.player.stop();
        return;
      }
      this.music_vae
      .sample(1, this.vae_temperature)
      .then((sample) => this.vaePlayer.start(sample[1]));
    }
  }

  componentDidMount() {
    this.player.start(this.state.TWINKLE_TWINKLE);
  }

  componentWillUnmount() {
    this.player.stop();
  }

  render()
  {
    return (
      <div>

      </div>
    );
  }
}

export default Beat2
