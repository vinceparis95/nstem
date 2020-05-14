import React, { Component } from 'react';
import { Carousel, Button, Card, Nav, Navbar,Accordion } from 'react-bootstrap';
import history from './../history';
import './Labs.css'
import v1 from './vectors/v1.svg';
import v2 from './vectors/v2.svg';



class Labs2 extends Component {
    render() {
        return (
          // accordion of booklets

            <div style={{ width: '108px', borderRadius:'9px',display: 'flex',
            justifyContent: 'left', transform:'translateX(11px)',
            textDecoration:'none',backgroundColor:'', opacity:'57%'}}>

            <div class="units">
            <h1 class="unitb" style={{width:'180px'}}>
            <Nav.Link style={{color:'rgb(143, 0, 145)'}} href="/DS">
            Data Science </Nav.Link></h1>
            <h2 class="unitb2">
            <Nav.Link style={{color:'rgb(145, 63, 0)',
            transform:'translate(27px,72px)'}} href="/DS">
            Python </Nav.Link></h2>
            <h2 class="unitb2">
            <Nav.Link style={{color:'rgb(145, 63, 0)',
            transform:'translate(27px,177px)'}} href="/DataFrames">
            DataFrames </Nav.Link></h2>
            <h1 class="unitb"style={{width:'260px'}}>
            <Nav.Link style={{color:'rgb(143, 0, 145)',
            transform:'translateY(267px)'}} href="/DS">
            Quantum Computing </Nav.Link></h1>
            <h2 class="unitb2">
            <Nav.Link style={{color:'rgb(145, 63, 0)',
            transform:'translate(27px,340px)'}} href="/QC">
            Qubits </Nav.Link></h2>
            <h2 class="unitb2">
            <Nav.Link style={{color:'rgb(145, 63, 0)',
            transform:'translate(27px,430px)'}} href="/QC">
            Primitives </Nav.Link></h2>
            </div>


          <div class="carousel" style={{transform:'translateX(19px)'}}>
          <Carousel interval="100000" style={{backgroundColor:'rgba(145, 63, 0,0.00)',
            transform:'translate(144px,10px)',width:"340px", height:'90px%',
            padding:'27px',margin:'19px', borderRadius:'9px'}}>
          <Carousel.Item interval="10000">
            <div class="blocks2">
              <Nav.Link style={{color:'rgb(143, 0, 145)'}}href="/DS">
            data types </Nav.Link>
              <img class='v2' src={v2}/>
            </div>
          </Carousel.Item>
          <Carousel.Item interval="10000">
          <div class="blocks2">
          <Nav.Link style={{color:'rgb(143, 0, 145)'}} href="/DS">
          data structures </Nav.Link>
          <img class='v2' src={v2}/>
          <img class='v2' src={v2}/>
          </div>
          </Carousel.Item >
          <Carousel.Item interval="10000">
          <div class="blocks2">
          <Nav.Link style={{color:'rgb(143, 0, 145)'}} href="/DS">
          functions </Nav.Link>
          <img class='v2b' src={v2}/>
          </div>
          </Carousel.Item>
          </Carousel>
          </div>

          <div class="carousel" style={{position:'relative', left:'-376px',
          top:'153px', transform:'translateX(19px)'}}>
          <Carousel interval="100000" style={{backgroundColor:'rgba(145, 63, 0,0.00)',
          transform:'translate(144px,10px)',width:"340px", height:'90px%',
          padding:'27px',margin:'19px', borderRadius:'9px'}}>
          <Carousel.Item interval="10000" >
          <div class="blocks2">
          <Nav.Link style={{color:'rgb(143, 0, 145)'}}href="/DataFrames">
          construction </Nav.Link>
          <div class='df'/>
          </div>
          </Carousel.Item>
          <Carousel.Item interval="10000">
          <div class="blocks2">
          <Nav.Link style={{color:'rgb(143, 0, 145)'}} href="/DataFrames">
          mutating </Nav.Link>
          <img class='v2' src={v2}/>
          <img class='v2' src={v2}/>
          </div>
          </Carousel.Item>
          <Carousel.Item interval="10000">
          <div class="blocks2">
          <Nav.Link style={{color:'rgb(143, 0, 145)'}} href="/DataFrames">
          plotting </Nav.Link>
          <img class='v2b' src={v2}/>
          </div>
          </Carousel.Item>
          <Carousel.Item interval="10000">
          <div class="blocks2">
          <Nav.Link style={{color:'rgb(143, 0, 145)'}} href="/DataFrames">
          mushing </Nav.Link>
          <img class='v2b' src={v2}/>
          </div>
          </Carousel.Item>
          </Carousel>
          </div >

          <div class="carousel" style={{position:'relative', left:'474px', top:'163px',transform:'translateX(19px)'}}>
          <Carousel interval="100000" style={{backgroundColor:'rgba(145, 63, 0,0.00)',
          transform:'translate(-1082px,210px)',width:"340px", height:'90px%',padding:'27px',margin:'19px', borderRadius:'9px'}}>
          <Carousel.Item interval="10000">
          <div class="blocks2">
          <Nav.Link style={{color:'rgb(143, 0, 145)'}}href="/QC">
          quanta </Nav.Link>
          <img class='v1' src={v1}/>
          </div>
          </Carousel.Item>
          <Carousel.Item interval="10000">
          <div class="blocks2">
          <Nav.Link style={{color:'rgb(143, 0, 145)'}} href="/QC">
          amplitudes </Nav.Link>
          <img class='v1' src={v1}/>
          <img class='v1' src={v1}/>
          </div>
          </Carousel.Item>
          <Carousel.Item interval="10000">
          <div class="blocks2">
          <Nav.Link style={{color:'rgb(143, 0, 145)'}} href="/QC">
          superposition </Nav.Link>
          <img class='v2b' src={v2}/>
          </div>
          </Carousel.Item>
          <Carousel.Item interval="10000">
          <div class="blocks2">
          <Nav.Link style={{color:'rgb(143, 0, 145)'}} href="/QC">
          entanglement </Nav.Link>
          <img class='v2b' src={v2}/>
          </div>
          </Carousel.Item>
          <Carousel.Item interval="10000">
          <div class="blocks2">
          <Nav.Link style={{color:'rgb(143, 0, 145)'}} href="/QC">
          teleportation </Nav.Link>
          <img class='v2b' src={v2}/>
          </div>
          </Carousel.Item >
          </Carousel>
          </div >

          <div class="carousel" style={{position:'relative', left:'-379px', top:'180px',transform:'translateX(19px)'}}>
          <Carousel interval="100000" style={{backgroundColor:'rgba(145, 63, 0,0.00)',
          transform:'translate(-600px,340px)',width:"340px", height:'90px%',padding:'27px',margin:'19px', borderRadius:'9px'}}>
          <Carousel.Item>
          <div class="blocks2">
          <Nav.Link style={{color:'rgb(143, 0, 145)'}} href="/QC">
          quantum fourier transform </Nav.Link>
          <img class='v2' src={v2}/>
          <img class='v2' src={v2}/>
          </div>
          </Carousel.Item>
          <Carousel.Item>
          <div class="blocks2">
          <Nav.Link style={{color:'rgb(143, 0, 145)'}}href="/QC">
          Deutsch-Josza </Nav.Link>
          <img class='v2' src={v2}/>
          </div>
          </Carousel.Item>
          <Carousel.Item>
          <div class="blocks2">
          <Nav.Link style={{color:'rgb(143, 0, 145)'}} href="/QC">
          Grover's algorithm </Nav.Link>
          <img class='v2b' src={v2}/>
          </div>
          </Carousel.Item>
          </Carousel>
          </div >

          </div>

        );
    }
}

export default Labs2;
