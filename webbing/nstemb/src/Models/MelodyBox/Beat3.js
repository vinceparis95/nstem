import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './Beat.css'
import Tone from 'tone'
import * as mm from "@magenta/music"
import {Tonal, Note} from "@tonaljs/tonal"

class Beat3 extends React.Component {
  constructor(props) {
    super(props);
    this.improvCheckpoint = 'https://storage.googleapis.com/magentadata/js/checkpoints/music_rnn/chord_pitches_improv'
    this.improvRNN = new mm.MusicRNN(this.improvCheckpoint)
    this.synth = new Tone.Synth().toMaster()
    const { midi, Note } = Tonal
    this.player = new mm.Player();

    this.sequence = {
      BEATB: {
      ticksPerQuarter: 360,
      totalTime: 2,
      timeSignatures: [{ time: 0, numerator: 4, denominator: 4 }],
      tempos: [{ time: 0, qpm: 300 }],
      notes: [
        { pitch: 60.3, startTime: 0, endTime: 0.9 },
        { pitch: 65.4, startTime: 0.9, endTime: 1.9 },
        { pitch: 67.2, startTime: 1.9, endTime: 2.7 },
      ]
    }
  }

    this.quantizedSequence = mm.sequences.quantizeNoteSequence(this.sequence, 1)
    const startProgram = async () => {
    try {
    await this.improvRNN.initialize()
    let improvisedMelody = await this.improvRNN.continueSequence(
      this.quantizedSequence, 60, 1.1, [60, 75,67,69])
    const playOriginalMelody = () => {
      this.sequence.notes.forEach(note => {
        this.synth.triggerAttackRelease(Note.fromMidi(note.pitch),
        note.endTime - note.startTime, note.startTime)
      })
    }
    const playGeneratedMelody = () => {
      improvisedMelody.notes.forEach(note => {
        this.synth.triggerAttackRelease(Note.fromMidi(note.pitch),
        note.quantizedEndStep - note.quantizedStartStep, note.quantizedStartStep)
      })
    }
    const originalMelodyButton = document.getElementById('b1a')
    const generatedMelodyButton = document.getElementById('b1b')
    originalMelodyButton.onclick = () => {
      playOriginalMelody()
    }
    generatedMelodyButton.onclick = () => {
      playGeneratedMelody()
    }
  } catch (error) {
    console.error(error)
  }
}
}
  componentDidMount() {
    this.player.start(this.sequence.BEATB);
  }

  componentWillUnmount() {
    this.player.stop();
  }

  render()
  {
    return (
      <div class="b1a">
      </div>
    );
  }
}

export default Beat3
