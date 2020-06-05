import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import * as tf from "@tensorflow/tfjs"
import './ML.css'

const cocoSsd = require('@tensorflow-models/coco-ssd');

class Clusterer extends React.Component{


  render()

{
  console.log(cocoSsd.version);
  return(
    <div class="KMeansMonitor">
    </div>
  )
 }
}
const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(Clusterer), domContainer);
export default Clusterer
