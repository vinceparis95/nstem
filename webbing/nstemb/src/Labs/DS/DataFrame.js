import { Carousel, Button, Card, Nav, Navbar,Accordion } from 'react-bootstrap';
import React, { Component } from "react";
import ReactDOM from 'react-dom'
import history from '../../history';
import "./DS.css";
import df1 from '../vectors/df1.svg';
import dfColumn from '../vectors/dfColumn.svg';
import dfElement from '../vectors/dfElement.svg';

var element = <img class="dfElement" src={dfElement} />
var dims = 3*3
var arr = []
var a = [<img class="dfElement" src={dfElement} />]
var i
for (i = 0; i<dims; i++){
  arr.push(element)
}

function setDims(){
 dims=document.getElementById("dims").value
}

function DataFrame(){
  const [toggle, setToggle] = React.useState(false);
  return (
    <div>

    <div >
    <div style={{fontFamily:'PressStart2P',opacity:'45%', width:'360px',
    position:'absolute',left:'36px', top: '160px',color:'rgb(143, 0, 145)'}}>
{/*
    dimensions
    <input type="text" id="dims" style={{width:'60px', borderRadius:'9px',
    border:'none', backgroundColor:'rgba(180, 180, 180,1)', opacity:'60%',
    transform:'translateX(9px)'}} />
    */}
    </div>

    <div >
      <h1 class="dfHeader" style={{left:'30px'}}>DataFrames</h1>
      <img class="dfAnimation1" style={{left:'500px'}} src={df1}></img>
    </div>
    <div class="dfButtonBorder"></div>
    <button class="dfButton" onClick={()=>setToggle( (prev) => (!prev) )}>DF</button>

    </div>

      <br/>
      <div class="dfElementBoundary">
      {
        toggle &&  arr

      }
      </div>
    </div>
  )
}
export default DataFrame;
ReactDOM.render(<DataFrame />, document.getElementById('root'));
