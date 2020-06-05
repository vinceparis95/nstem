import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import * as tf from "@tensorflow/tfjs"
import "@tensorflow-models/coco-ssd"
import './ML.css'

const cocoSsd = require("@tensorflow-models/coco-ssd");

class CamBox extends React.Component {
  constructor(props) {
    super(props);
    
    this.videoRef = React.createRef();
    this.canvasRef = React.createRef();
    this.canvasRef.current = document.createElement("video");

    this.videoRef.current = document.createElement("video");

    this.detectFromVideoFrame = (model, video) => {
      model.detect(video).then(
        predictions => {
          this.showDetections(predictions);

          requestAnimationFrame(() => {
            this.detectFromVideoFrame(model, video);
          });
        },
        error => {
          console.log("Couldn't start the webcam");
          console.error(error);
        }
      );
      this.showDetections = predictions => {
        const ctx = this.canvasRef.current.getContext("2d");
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        const font = "24px helvetica";
        ctx.font = font;
        ctx.textBaseline = "top";

        predictions.forEach(prediction => {
          const x = prediction.bbox[0];
          const y = prediction.bbox[1];
          const width = prediction.bbox[2];
          const height = prediction.bbox[3];
          // Draw the bounding box.
          ctx.strokeStyle = "#2fff00";
          ctx.lineWidth = 1;
          ctx.strokeRect(x, y, width, height);
          // Draw the label background.
          ctx.fillStyle = "#2fff00";
          const textWidth = ctx.measureText(prediction.class).width;
          const textHeight = parseInt(font, 10);
          // draw top left rectangle
          ctx.fillRect(x, y, textWidth + 10, textHeight + 10);
          // draw bottom left rectangle
          ctx.fillRect(
            x,
            y + height - textHeight,
            textWidth + 15,
            textHeight + 10
          );

          // Draw the text last to ensure it's on top.
          ctx.fillStyle = "#000000";
          ctx.fillText(prediction.class, x, y);
          ctx.fillText(prediction.score.toFixed(2), x, y + height - textHeight);
        });
      };
    };
  }

  componentDidMount() {
    if (navigator.mediaDevices.getUserMedia) {
      // define a Promise that'll be used to load the webcam and read its frames
      const webcamPromise = navigator.mediaDevices
        .getUserMedia({
          video: true,
          audio: true
        })

        .then(
          stream => {
            window.stream = stream;
            // pass the stream to the videoRef
            this.videoRef.current.srcObject = window.stream;
            return new Promise(resolve => {
              this.videoRef.current.onloadedmetadata = () => {
                resolve();
              };
            });
          },
          error => {
            console.log("Couldn't start the webcam");
            console.error(error);
          }
        );

      // define a Promise that'll be used to load the model

      const loadlModelPromise = cocoSsd.load();

      // resolve all the Promises
      Promise.all([loadlModelPromise, webcamPromise])
        .then(values => {
          this.detectFromVideoFrame(values[0], this.videoRef.current);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }

  render() {
    console.log(cocoSsd.version);
    return (
      <div className="CamMonitor">
        <div className="videoJawn" style={{ transform: "translate(0px,0px)" }}>
          <video
            className="innerVideo"
            autoPlay
            muted
            ref={this.videoRef}
            width="500"
            height="360"
          />
          <canvas
            style={this.styles}
            ref={this.canvasRef}
            width="20"
            height="50"
          />
        </div>
      </div>
    );
  }
}

export default CamBox
