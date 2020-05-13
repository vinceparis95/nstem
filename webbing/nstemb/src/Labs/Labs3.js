import React, { Component } from 'react';
import { Carousel, Button, Card, Nav, Navbar,Accordion } from 'react-bootstrap';
import history from './../history';
import './Labs.css'
import v1 from './vectors/v1.svg';
import v2 from './vectors/v2.svg';


class Labs3 extends Component {
    render() {
        return (
          // accordion of booklets
            <div style={{ width: '108px', borderRadius:'9px',display: 'flex', justifyContent: 'left', transform:'translateX(11px)',
            padding: '0px',textDecoration:'none',backgroundColor:'', opacity:'49%'}}>

                <Accordion style={{margin:'0', transform:''}}>
                  <Card style={{backgroundColor:'rgba(0,0,0,0.0)', border:'none', textDecoration:'none'}}>


                    <Card.Header style={{width:'90px', backgroundColor:'rgba(0,0,0,0.0)', padding:'0px',textDecoration:'none'}}>
                      <Accordion.Toggle as={Button} variant="link" eventKey="0"
                      style={{fontSize: '27px', margin:'0px',textDecoration:'none',color:'rgb(143, 0, 145)'}}>
                      Labs
                      </Accordion.Toggle>
                    </Card.Header>


                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                      <Accordion style={{margin:'0', transform:''}}>
                        <Card style={{backgroundColor:'rgba(0,0,0,0.0)', border:'none', textDecoration:'none'}}>
                          <Card.Header style={{width:'450px', backgroundColor:'rgba(0,0,0,0.0)', padding:'0px',textDecoration:'none'}}>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0"
                            style={{fontSize: '19px', margin:'0px',textDecoration:'none',color:'rgb(143, 0, 145)'}}>
                                Data Science
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="0">
                            <Card.Body>
                            <h2 class="unitb3">
                            <Nav.Link style={{color:'rgb(145, 63, 0)', transform:'translate(19px,-50px)'}} href="/DS"> 
                            Python </Nav.Link></h2>
                            <div>
                            <Carousel interval="10000" style={{backgroundColor:'rgba(145, 63, 0,0.00)',
                            transform:'translate(144px,10px)',width:"340px", height:'90px%',padding:'27px',margin:'19px', borderRadius:'9px'}}>
                            <Carousel.Item>
                            <div class="blocks2">
                            <Nav.Link style={{color:'rgb(143, 0, 145)'}} href="/DS">
                            data structures </Nav.Link>
                            <img class='v2' src={v2}/>
                            <img class='v2' src={v2}/>
                            </div>
                            </Carousel.Item>
                            </Carousel>
                            </div>
                            <h2 class="unitb3">
                            <Nav.Link style={{color:'rgb(145, 63, 0)', transform:'translate(19px,26px)'}} href="/DS">
                            DataFrames </Nav.Link></h2>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                      </Card.Body>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                      <Accordion style={{margin:'0', transform:''}}>
                        <Card style={{backgroundColor:'rgba(0,0,0,0.0)', border:'none', textDecoration:'none'}}>
                          <Card.Header style={{width:'230px', backgroundColor:'rgba(0,0,0,0.0)', padding:'0px',textDecoration:'none'}}>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0"
                            style={{fontSize: '19px', margin:'0px',textDecoration:'none',color:'rgb(143, 0, 145)'}}>
                                Quantum Computing
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="0">
                            <Card.Body>
                            <h2 class="unitb3">
                            <Nav.Link style={{color:'rgb(145, 63, 0)', transform:'translate(19px,-5px)'}} href="/DS"> Qubits </Nav.Link></h2>
                            <h2 class="unitb3">
                            <Nav.Link style={{color:'rgb(145, 63, 0)', transform:'translate(19px,26px)'}} href="/DS"> Primitives </Nav.Link></h2>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                      </Card.Body>
                    </Accordion.Collapse>

                  </Card>
                </Accordion>

            </div>
        );
    }
}



class Labs2 extends Component {
    render() {
        return (
          // accordion of booklets

            <div style={{ width: '108px', borderRadius:'9px',display: 'flex', justifyContent: 'left', transform:'translateX(11px)',
            textDecoration:'none',backgroundColor:'', opacity:'49%'}}>

            <div class="units">
            <h1 class="unitb" style={{width:'180px'}}>
            <Nav.Link style={{color:'rgb(143, 0, 145)'}} href="/DS"> Data Science </Nav.Link></h1>
            <h2 class="unitb2">
            <Nav.Link style={{color:'rgb(145, 63, 0)', transform:'translate(27px,72px)'}} href="/DS"> Python </Nav.Link></h2>
            <h2 class="unitb2">
            <Nav.Link style={{color:'rgb(145, 63, 0)', transform:'translate(27px,177px)'}} href="/DS"> DataFrames </Nav.Link></h2>

            <h1 class="unitb"style={{width:'260px'}}>
            <Nav.Link style={{color:'rgb(143, 0, 145)', transform:'translateY(267px)'}} href="/DS"> Quantum Computing </Nav.Link></h1>
            <h2 class="unitb2">
            <Nav.Link style={{color:'rgb(145, 63, 0)', transform:'translate(27px,340px)'}} href="/QC"> Qubits </Nav.Link></h2>
            <h2 class="unitb2">
            <Nav.Link style={{color:'rgb(145, 63, 0)', transform:'translate(27px,430px)'}} href="/QC"> Primitives </Nav.Link></h2>


            </div>


          <div>
          <Carousel interval="10000" style={{backgroundColor:'rgba(145, 63, 0,0.00)',
          transform:'translate(144px,10px)',width:"340px", height:'90px%',padding:'27px',margin:'19px', borderRadius:'9px'}}>
          <Carousel.Item>
          <div class="blocks2">
          <Nav.Link style={{color:'rgb(143, 0, 145)'}}href="/DS"> data types </Nav.Link>
          <img class='v2' src={v2}/>
          </div>
          </Carousel.Item>
          <Carousel.Item>
          <div class="blocks2">
          <Nav.Link style={{color:'rgb(143, 0, 145)'}} href="/DS"> data structures </Nav.Link>
          <img class='v2' src={v2}/>
          <img class='v2' src={v2}/>
          </div>
          </Carousel.Item>
          <Carousel.Item>
          <div class="blocks2">
          <Nav.Link style={{color:'rgb(143, 0, 145)'}} href="/DS"> functions </Nav.Link>
          <img class='v2b' src={v2}/>
          </div>
          </Carousel.Item>
          </Carousel>
          </div>
          <div style={{position:'relative', left:'-376px', top:'153px'}}>
          <Carousel interval="10000" style={{backgroundColor:'rgba(145, 63, 0,0.00)',
          transform:'translate(144px,10px)',width:"340px", height:'90px%',padding:'27px',margin:'19px', borderRadius:'9px'}}>
          <Carousel.Item>
          <div class="blocks2">
          <Nav.Link style={{color:'rgb(143, 0, 145)'}}href="/DS"> construction </Nav.Link>
          <img class='v2' src={v2}/>
          </div>
          </Carousel.Item>
          <Carousel.Item>
          <div class="blocks2">
          <Nav.Link style={{color:'rgb(143, 0, 145)'}} href="/DS"> mutating </Nav.Link>
          <img class='v2' src={v2}/>
          <img class='v2' src={v2}/>
          </div>
          </Carousel.Item>
          <Carousel.Item>
          <div class="blocks2">
          <Nav.Link style={{color:'rgb(143, 0, 145)'}} href="/DS"> plotting </Nav.Link>
          <img class='v2b' src={v2}/>
          </div>
          </Carousel.Item>
          <Carousel.Item>
          <div class="blocks2">
          <Nav.Link style={{color:'rgb(143, 0, 145)'}} href="/DS"> mushing </Nav.Link>
          <img class='v2b' src={v2}/>
          </div>
          </Carousel.Item>
          </Carousel>
          </div >


          <div style={{position:'relative', left:'474px', top:'163px'}}>
          <Carousel interval="10000" style={{backgroundColor:'rgba(145, 63, 0,0.00)',
          transform:'translate(-1082px,210px)',width:"340px", height:'90px%',padding:'27px',margin:'19px', borderRadius:'9px'}}>
          <Carousel.Item>
          <div class="blocks2">
          <Nav.Link style={{color:'rgb(143, 0, 145)'}}href="/QC"> quanta </Nav.Link>
          <img class='v2' src={v2}/>
          </div>
          </Carousel.Item>
          <Carousel.Item>
          <div class="blocks2">
          <Nav.Link style={{color:'rgb(143, 0, 145)'}} href="/QC"> amplitudes </Nav.Link>
          <img class='v2' src={v2}/>
          <img class='v2' src={v2}/>
          </div>
          </Carousel.Item>
          <Carousel.Item>
          <div class="blocks2">
          <Nav.Link style={{color:'rgb(143, 0, 145)'}} href="/QC"> superposition </Nav.Link>
          <img class='v2b' src={v2}/>
          </div>
          </Carousel.Item>
          <Carousel.Item>
          <div class="blocks2">
          <Nav.Link style={{color:'rgb(143, 0, 145)'}} href="/QC"> entanglement </Nav.Link>
          <img class='v2b' src={v2}/>
          </div>
          </Carousel.Item>
          <Carousel.Item>
          <div class="blocks2">
          <Nav.Link style={{color:'rgb(143, 0, 145)'}} href="/QC"> teleportation </Nav.Link>
          <img class='v2b' src={v2}/>
          </div>
          </Carousel.Item>
          </Carousel>
          </div >
          <div style={{position:'relative', left:'-379px', top:'180px'}}>
          <Carousel interval="10000" style={{backgroundColor:'rgba(145, 63, 0,0.00)',
          transform:'translate(-600px,340px)',width:"340px", height:'90px%',padding:'27px',margin:'19px', borderRadius:'9px'}}>
          <Carousel.Item>
          <div class="blocks2">
          <Nav.Link style={{color:'rgb(143, 0, 145)'}}href="/QC"> Deutsch-Josza </Nav.Link>
          <img class='v2' src={v2}/>
          </div>
          </Carousel.Item>
          <Carousel.Item>
          <div class="blocks2">
          <Nav.Link style={{color:'rgb(143, 0, 145)'}} href="/QC"> quantum fourier transform </Nav.Link>
          <img class='v2' src={v2}/>
          <img class='v2' src={v2}/>
          </div>
          </Carousel.Item>
          <Carousel.Item>
          <div class="blocks2">
          <Nav.Link style={{color:'rgb(143, 0, 145)'}} href="/QC"> Grover's algorithm </Nav.Link>
          <img class='v2b' src={v2}/>
          </div>
          </Carousel.Item>
          </Carousel>
          </div >

            </div>

        );
    }
}

export default Labs3;
