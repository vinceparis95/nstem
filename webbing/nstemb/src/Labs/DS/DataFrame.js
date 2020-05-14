import { Carousel, Button, Card, Nav, Navbar,Accordion } from 'react-bootstrap';
import React, { Component } from "react";
import ReactDOM from 'react-dom'
import history from '../../history';
import "./DS.css";

var element = <li style={{stroke:'green'}}class="element"/>
var row = 3
var col = 3

var arr = []
var i
for (i = 0; i<row; i++){
  arr.push(element)
}

function DataFrame(){

  var i
  var n

  const [toggle, setToggle] = React.useState(false);
  const Element = () => <li className="element" />;

  return (

    <div>
      <div >
        <div style={{fontFamily:'PressStart2P',opacity:'45%', width:'360px',
        position:'absolute',left:'36px', top: '160px',color:'rgb(143, 0, 145)'}}>
        </div>
      <div >

        <h1 class="dfHeader" style={{left:'30px'}}>
        DataFrames :<br></br>
        </h1>

        <h1  class='dfHeader2'style={{top:'150px',left:'30px'}}>
        constructor</h1>
        <div class="text box" style={{width:'180px'}}>
        <p class="instructions">
        to construct a DataFrame, say:<br/><br/>
        df = pd.DataFrame(),<br/><br/>
        and give a set of columns, like so:<br/><br/>
        df['columns']=['col1', 'col2', 'col3'].
        </p>
        </div>
        <div class="dfButtonBorder"></div>
          <button class="dfButton" onClick={()=>setToggle( (prev) => (!prev) )}>
          DF</button>
        </div>

        <div class="superScreen">
          <div class="screenDiv" >
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
      <br/>
    </div>
  </div>

  )
}

export default DataFrame;

ReactDOM.render(<DataFrame />, document.getElementById('root'));
