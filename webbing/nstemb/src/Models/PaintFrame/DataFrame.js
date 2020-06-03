import { Carousel, Button, Card, Nav, Navbar,Accordion } from 'react-bootstrap';
import React, { useRef,useEffect, useState, Component } from "react";
import ReactDOM from 'react-dom'
import history from '../../history';
import "./DS.css";


function DataFrame(){

  const [toggle, setToggle] = React.useState(false);
  const [zoom, zoomIn] = React.useState(false);
  const [col, setCol] = useState(0)
  const [row, setRow] = useState(0)
  const [animate, setAnimate] = useState(false);
  const handleClick = () => setAnimate(!animate);
  var element = <li class="element"/>
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
  const Element = () => <li className="element" />;
  console.log(col)
  return (

    <div>
      <div >

        <div style={{fontFamily:'PressStart2P',opacity:'45%', width:'360px',
        position:'absolute',left:'36px', top: '160px',color:'rgb(143, 0, 145)'}}>
        </div>

        <div class="docBorder">
        <p class="doc">
        The DataFrame is a powerful structure that can hold data.
        To construct a DataFrame, say:
        <br/> <p class="instructions2" >pd.DataFrame( )</p> <br/>
        </p>
        </div>


        <div >
          <h1 class="dfHeader" style={{left:'30px'}}>
          DataFrames :<br></br></h1>
          <h1  class='dfHeader2'style={{top:'150px',left:'30px'}}>
          constructor</h1>

          <div class="codeBorder" style={{scrollbarColor:'#6a00ff'}}>
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
            type="range"
            value={sliderValue}
            min={0.1}
            max={1}
            step={0.01}
            onChange={e => setSliderValue(e.target.value)}
          />


          <div class="monitor"style={{}}>
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

export default DataFrame;

ReactDOM.render(<DataFrame />, document.getElementById('root'));
