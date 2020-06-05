import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import * as ml5 from "ml5";
import * as tf from "@tensorflow/tfjs"
import './ML.css'
import ab from './vectors/ab.jpg'



class ClassBox extends Component{

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.im = ab
  }
  render(){
    const classifier = ml5.imageClassifier('MobileNet', modelLoaded);
    function modelLoaded() {
    console.log('Model Loaded!');
  }
  classifier.predict(this.myRef, function(err, results) {
  console.log(results);
}
);

  return(
    <div class="KMeansMonitor">
    <img ref={this.im}/>
    </div>
  )
 }
}

export default ClassBox
