import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './Beat.css'
import Tone from 'tone'
import uxu2b from '../Data/uxu2b.mp3'
import uxu2bb from '../Data/uxu2bb.mp3'

class Beat extends Component{

render(){
	Tone.Buffer.on('load', () => {
		    sampler.start();
	})

var sampler = new Tone.Sampler({
	"C3" : uxu2b
}).toMaster()


const notes = ["a3", "e2", "a2", "f1","c2","f2"];

const synthPart = new Tone.Sequence(

function(time, note) {
    sampler.triggerAttackRelease(note, "12hz", time);
  },
  notes,
  "8n");



  Tone.Transport.start();
  synthPart.start()



  return(
    <div class="env">
    <div class="garden1">
    <div class="beatfrog"></div>
  	<div class="beatfrog2"></div>
  	<div class="beatfrog3"></div>
  	<div class="beatfrog4"></div>
		</div>
  	</div>
);
}
}

export default Beat
