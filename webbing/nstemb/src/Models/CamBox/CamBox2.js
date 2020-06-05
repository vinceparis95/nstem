import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import * as tf from "@tensorflow/tfjs"
import "@tensorflow-models/mobilenet"
import './ML.css'

const cocoSsd = require('@tensorflow-models/mobilenet');

class CamBox2 extends React.Component{

  constructor(props){

super(props)
this.video = document.getElementById('');
this.liveView = document.getElementById('liveView');
this.demosSection = document.getElementById('demos');

var modelHasLoaded = false;
var model = undefined;

}
  render()

{
  console.log(cocoSsd.version);
  return(
    <div class="CamMonitor">
    <div class="videoJawn" style={{transform:'translate(0px,0px)'}}>
    </div>
    </div>
  )
 }
}

export default CamBox2
