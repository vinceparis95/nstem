import { Carousel, Button, Card, Nav, Navbar,Accordion } from 'react-bootstrap';
import React, { useRef,useEffect, useState, Component } from "react";
import ReactDOM from 'react-dom'
import history from '../../history';
import "./PaintFrame.css";


function PaintFrame(){

  const [toggle, setToggle] = React.useState(false);
  const [zoom, zoomIn] = React.useState(false);
  const [col, setCol] = useState(0)
  const [row, setRow] = useState(0)
  const [animate, setAnimate] = useState(false);
  const handleClick = () => setAnimate(!animate);
  var element = <li class="element"/>
  var paint = <div class="paint"/>
  var arr = []
  var i
  for (i = 0; i<row; i++){
    arr.push(element)
  }
  const [sliderValue, setSliderValue] = useState(1); // scale value 1x
  const ref = useRef(null);

  useEffect(() => {
    ref.current.style.transform= `scale(${sliderValue},${sliderValue})`;
  }, [sliderValue]);

  const Element = () => <div className="paint"/>;

  console.log(col)

  return (

    <div>
      <div >

        <div style={{fontFamily:'PressStart2P',opacity:'45%', width:'360px',
        position:'absolute',left:'36px', top: '160px',color:'rgb(143, 0, 145)'}}>
        </div>

        <div style={{width:'180px'}}>
          <h1 className="pfHeader" style={{animationDelay:'.19s',
            color:"rgba(103, 0, 145,0.6)"}}>
          P</h1>
          <h1 className="pfHeader" style={{animationDelay:'.26s',
          color:"rgba(143, 0, 145,0.6)"}}>
          a</h1>
          <h1 className="pfHeader" style={{animationDelay:'.36s',
          color:"rgba(103, 0, 145,0.6)"}}>
          i</h1>
          <h1 className="pfHeader" style={{animationDelay:'.44s',
          color:"rgba(143, 100, 145,0.6)"}}>
          n</h1>
          <h1 className="pfHeader" style={{animationDelay:'.45s',
            color:"rgba(103, 0, 145,0.6)"}}>
          t</h1>
          <h1 className="pfHeader" style={{animationDelay:'.57',
            color:"rgba(13, 0, 145,0.6)"}}>
          F</h1>
          <h1 className="pfHeader" style={{animationDelay:'.60s',
            color:"rgba(103, 0, 145,0.6)"}}>
          r</h1>
          <h1 className="pfHeader" style={{animationDelay:'.63s',
            color:"rgba(143, 0, 145,0.6)"}}>
          a</h1>
          <h1 className="pfHeader" style={{animationDelay:'.90s',
            color:"rgba(103, 0, 145,0.6)"}}>
          m</h1>
          <h1 className="pfHeader" style={{animationDelay:'.95s',
            color:"rgba(143, 0, 145,0.6)"}}>
          e</h1>

          <div class="docBorder">
          <p class="doc">
          Fill your buckets with paint : )
          <br/> <p class="instructions2" ></p> <br/>
          </p>
          </div>


          <div class="codeBorder" style={{height:'270px',scrollbarColor:'#6a00ff'}}>
          <div class="textbox" style={{width:'180px'}}>
          <p class="instructions"></p>
          <p class="instructions2"></p>

          <p class="instructions3">
          <form class="codeForm">
            <label>
            row dim:
              <input type="number" name="dimension" onKeyUp=
              {e => setRow(Number(e.target.value))} />
              </label>
              <input class='goButton' type="submit" value="run" />
          </form></p>
          <p class="instructions3">
          <form class="codeForm">
            <label>
            column dim:
            <input type="number" name="dimension" onKeyUp=
            {e => setCol(Number(e.target.value))} />
            </label>
              <input class='goButton' type="submit" value="run" />
          </form>
            <br/><br/></p>
          <p class="instructions3">
          <form class="codeForm">
            <label>
            input code:
              <input type="number" name="dimension" />
            </label>
              <input class='goButton' type="submit" value="run" />
          </form></p>
          <p class="instructions3">
          <form class="codeForm">
            <label>
            input code:
              <input type="number" name="dimension" />
            </label>
              <input class='goButton' type="submit" value="run" />
          </form> </p>

          </div>
          </div>

          <div class="btnConsole">
            <button class="dfButton" onClick={()=>setToggle( (prev) => (!prev) )}>
            </button>
          </div>
          </div>

          <input
          class="slidey"
          style={{transform:'translate(260px,-90px)',opacity:'9%'}}
            type="range"
            value={sliderValue}
            min={0.1}
            max={1}
            step={0.01}
            onChange={e => setSliderValue(e.target.value)}
          />


          <div class="paintFrameMonitor"style={{}}>
          <div ref={ref}class="superScreen">
            <div   class="screenDiv" >
              <div id="subScreen" class="subScreen">

                {[...Array(col).keys()].map(ul => (
                  <ul key={ul}>
                    {toggle &&
                      [...Array(row).keys()].map(
                        li => <Element key={li} />)}
                  </ul>
                ))}

              </div>
            </div>
          </div>
          </div>
        <br/>
      </div>
    </div>
  )
}

export default PaintFrame;

ReactDOM.render(<PaintFrame />, document.getElementById('root'));
